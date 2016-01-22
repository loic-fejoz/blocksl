/**
 * @fileoverview Generating Lua for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 * @author loic@fejoz.net (Loïc Fejoz)
 */
'use strict';

goog.provide('Blockly.Lua.math');

goog.require('Blockly.Lua');


Blockly.Lua['csg_box'] = function(block) {
    var argument0 = Blockly.Lua.valueToCode(block, 'SIZE', Blockly.Lua.ORDER_NONE) || '1';
    var code = 'box(' + argument0 + ')';
    return code;
};

Blockly.Lua['csg_translate'] = function(block) {
    var argx = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_NONE) || '0';
    var argy = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_NONE) || '0';
    var argz = Blockly.Lua.valueToCode(block, 'Z', Blockly.Lua.ORDER_NONE) || '0';
    var shapeCode = Blockly.Lua.statementToCode(block, 'SHAPE');
    var code = 'translate(' + argx + ', ' + argy + ', ' + argz + ') * ' + shapeCode;
    return code;
};