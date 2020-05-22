/**
 * The subliminal message that contains the canvas it will be displayed on and other settings.
 * 
 * @param {Array} messages — List of messsages
 * @param {number} duration — How long to display the message
 * @param {string} color — Message color
 * @param {boolean} repeat — Repeat messages
 * @param {boolean} random — Display messages randomly
 */
function Message(messages, duration, color, repeat, random) {
	this.messages = messages;
	this.duration = duration;
	this.color = color;
	this.repeat = repeat;
	this.random = random;
    
	this.canvas = document.createElement("canvas");
	this.canvas.style.width = '100%';
	this.canvas.style.width = '80vh';
  
	document.body.appendChild(this.canvas);
}

/**
 * Display the message on screen
 */
Message.prototype.show = function() {
	this.ctx = this.canvas.getContext("2d");
	this.ctx.font = "20px Arial";
	this.ctx.fillStyle = this.color;

	//! Middle of screen
	let x = (this.canvas.width - this.ctx.measureText(this.messages[0]).width) / 2; // Use the text size (px) to horizontally center text 
	let y = this.canvas.height / 2;
	this.ctx.fillText(this.messages[0], x, y);

	setTimeout(() => this.hide(), this.duration); // Message only visible for 'duration'
}

/**
 * Clear the canvas, removing the message
 */
Message.prototype.hide = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

module.exports = Message;