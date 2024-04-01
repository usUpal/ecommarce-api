// message, status-code, error-code, error

class HttpException extends Error {
    message: string;
    errorCode: any;
    statusCode: number;
    errors: any;

    constructor(message: string, statusCode: number, errorCode: any, errors: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errors = errors;
    }
}