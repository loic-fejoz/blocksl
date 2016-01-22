;
Blockly.Blocks['csg_box'] = {
    init: function() {
	//    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
	this.setColour(20);
	this.appendDummyInput()
            .appendField("Box");
	this.appendValueInput("SIZE")
	    .appendField("size")
            .setCheck('Number');
	this.setPreviousStatement(true, "Shape");
	this.setTooltip('Create a box.');
    }
};

Blockly.Blocks['csg_translate'] = {
    init: function() {
	this.setHelpUrl('http://www.example.com/');
	this.setColour(65);
	this.appendDummyInput()
            .appendField("Translate");
	this.appendStatementInput('SHAPE');
	this.appendDummyInput()
            .appendField("by");
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
	this.setPreviousStatement(true, "Shape");
	this.setTooltip('Translate a shape');
    }
};