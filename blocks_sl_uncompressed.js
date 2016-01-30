;


Blockly.Blocks['csg_emit'] = {
    init: function() {
	//    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
	this.setColour(230);
	this.appendDummyInput()
            .appendField("emit");
	this.appendValueInput("SHAPE")
	    .appendField("shape")
	    .setCheck("Shape");
	this.setTooltip('Emit a shape.');
	this.setPreviousStatement(true, "Statement");
	this.setNextStatement(true);
    }
};

Blockly.Blocks['csg_vector'] = {
    init: function() {
	this.setHelpUrl('http://www.example.com/');
	this.setColour(65);
	this.appendDummyInput()
            .appendField("v");
	this.appendValueInput("X")
	    .appendField("x")
            .setCheck("Number");
	this.appendValueInput("Y")
	    .appendField("y")
            .setCheck("Number");
	this.appendValueInput("Z")
            .appendField("z")
            .setCheck("Number");
	this.setInputsInline(true);
	this.setTooltip('Create a vector v(x,y,z).');
	this.setOutput(true, "Vector");
    }
};

Blockly.Blocks['csg_box'] = {
    init: function() {
	//    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
	this.setColour(20);
	this.appendDummyInput()
            .appendField("Box");
	this.appendValueInput("SIZE")
	    .appendField("size")
            .setCheck('Number');
	this.setTooltip('Create a box.');
	this.setOutput(true, "Shape");
    }
};

Blockly.Blocks['csg_translate'] = {
    init: function() {
	this.setHelpUrl('http://www.example.com/');
	this.setColour(65);
	this.appendDummyInput()
            .appendField("Translate");
	this.appendValueInput('SHAPE')
	    .appendField('shape')
	    .setCheck('Shape');
	this.appendValueInput("VECTOR")
	    .appendField("by")
            .setCheck("Vector");
	this.setTooltip('Translate a shape by a given vector.');
	this.setOutput(true, "Shape");
    }
};

Blockly.Blocks['csg_rotate'] = {
    init: function() {
	this.setHelpUrl('http://www.example.com/');
	this.setColour(65);
	this.appendDummyInput()
            .appendField("Rotate");
	this.appendValueInput('SHAPE')
	    .appendField("shape")
	    .setCheck("Shape");
	this.appendValueInput("VECTOR")
            .appendField("by")
            .setCheck("Vector");
	this.setTooltip('Rotate a shape by given angles.');
	this.setOutput(true, "Shape");
    }
};
