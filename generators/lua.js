;
/**
 * @fileoverview Helper functions for generating JavaScript for blocks.
 * @author loic@fejoz.net (Loïc Fejoz)
 */
'use strict';

goog.provide('Blockly.Lua');
goog.require('Blockly.Generator');

Blockly.Lua = new Blockly.Generator('Lua');

/**
 * Order of operation ENUMs.
 * TODO Check Lua operator priority
 */
Blockly.Lua.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Lua.ORDER_MEMBER = 1;         // . []
Blockly.Lua.ORDER_NEW = 1;            // new
Blockly.Lua.ORDER_FUNCTION_CALL = 2;  // ()
Blockly.Lua.ORDER_INCREMENT = 3;      // ++
Blockly.Lua.ORDER_DECREMENT = 3;      // --
Blockly.Lua.ORDER_LOGICAL_NOT = 4;    // !
Blockly.Lua.ORDER_BITWISE_NOT = 4;    // ~
Blockly.Lua.ORDER_UNARY_PLUS = 4;     // +
Blockly.Lua.ORDER_UNARY_NEGATION = 4; // -
Blockly.Lua.ORDER_TYPEOF = 4;         // typeof
Blockly.Lua.ORDER_VOID = 4;           // void
Blockly.Lua.ORDER_DELETE = 4;         // delete
Blockly.Lua.ORDER_MULTIPLICATION = 5; // *
Blockly.Lua.ORDER_DIVISION = 5;       // /
Blockly.Lua.ORDER_MODULUS = 5;        // %
Blockly.Lua.ORDER_ADDITION = 6;       // +
Blockly.Lua.ORDER_SUBTRACTION = 6;    // -
Blockly.Lua.ORDER_BITWISE_SHIFT = 7;  // << >> >>>
Blockly.Lua.ORDER_RELATIONAL = 8;     // < <= > >=
Blockly.Lua.ORDER_IN = 8;             // in
Blockly.Lua.ORDER_INSTANCEOF = 8;     // instanceof
Blockly.Lua.ORDER_EQUALITY = 9;       // == != === !==
Blockly.Lua.ORDER_BITWISE_AND = 10;   // &
Blockly.Lua.ORDER_BITWISE_XOR = 11;   // ^
Blockly.Lua.ORDER_BITWISE_OR = 12;    // |
Blockly.Lua.ORDER_LOGICAL_AND = 13;   // &&
Blockly.Lua.ORDER_LOGICAL_OR = 14;    // ||
Blockly.Lua.ORDER_CONDITIONAL = 15;   // ?:
Blockly.Lua.ORDER_ASSIGNMENT = 16;    // = += -= *= /= %= <<= >>= ...
Blockly.Lua.ORDER_COMMA = 17;         // 
Blockly.Lua.ORDER_NONE = 99;          // (...)

Blockly.Lua.init = function() {
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Lua.finish = function(code) {
    // TODO Convert the definitions dictionary into a list.
    return code;
};

/**
 * Common tasks for generating Python from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Python code created for this block.
 * @return {string} Python code with comments and subsequent blocks added.
 * @this {Blockly.CodeGenerator}
 * @private
 */
Blockly.Lua.scrub_ = function(block, code) {
  if (code === null) {
    // Block has handled code generation itself.
    return '';
  }
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += this.prefixLines(comment, '-- ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '-- ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

Blockly.Lua.scrubNakedValue = function(line) {
  return line + '\n';
};