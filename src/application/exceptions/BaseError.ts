export class BaseError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'BaseError';
        Error.captureStackTrace(this, this.constructor);
    }
}