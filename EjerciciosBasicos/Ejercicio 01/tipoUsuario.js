export const MENSAJES = {
        MENOR: 'Menor de edad',
        ACTIVO: 'Trabajando o estudiando',
        JUBILADO: 'Jubilado',
        NO_POSITIVA: 'La edad debe ser positiva',
        CON_DECIMALES: 'Introduce la edad sin decimales',
        NO_NUMERO: 'La edad introducida no es un número',
};

export function clasificarEdad(edad) {
        try {
                if (typeof edad !== 'number' || isNaN(edad)) {
                        throw new Error(MENSAJES.NO_NUMERO);
                }
                if (edad < 0) {
       			throw new Error(MENSAJES.NO_POSITIVA);
                }

                if (Number.isInteger(edad) === false) {
                        throw new Error(MENSAJES.CON_DECIMALES);
                }

                if (edad < 18) {
                        return MENSAJES.MENOR;
                } else if (edad <= 65) {
                        return MENSAJES.ACTIVO;
                } else {
                        return MENSAJES.JUBILADO;
                }
        } catch (error) {
                console.error(error.message);
                throw error;
        }
}

export function parseEdad(texto) {
        try {
                texto = texto.trim();
                if (texto === '') {
                        throw new Error(MENSAJES.NO_NUMERO);
                }
                let numero = Number(texto);
                if (isNaN(numero)) {
                        throw new Error(MENSAJES.NO_NUMERO);
                }
                return numero;
        } catch (error) {
                console.error(error.message);
                throw error;
        }
}

