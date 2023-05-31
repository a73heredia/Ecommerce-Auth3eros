export class Exception extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

export class NotFoundException extends Exception {
    constructor(message = 'Not Found entity') {
        super(message, 404)
    }
}

export class BadRequestException extends Exception {
    constructor(message = 'Bad Request') {
        super(message, 400)
    }
}

export class UnauthorizedException extends Exception {
    constructor(message = 'Unauthorized') {
        super(message, 401)
    }
}

export class ForbidenException extends Exception {
    constructor(message = 'Forbiden') {
        super(message, 403)
    }
}