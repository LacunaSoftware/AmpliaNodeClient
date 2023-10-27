'use strict';

class OrderLocketError extends Error {

	constructor(message, innerError = null) {
		super(message);

		this._name = this.constructor.name;

		// Build stack trace.
		Error.captureStackTrace(this, this.constructor);
		if (innerError && innerError.stack) {
			this.stack += '\n';
			this.stack += innerError.stack;
		}
	}
}

exports.OrderLocketError = OrderLocketError;
