

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //TODO: Validate JWT
            //SI EL TOKEN NO ES VALIDO, DESCONECTAR

            //TODO: Saber que usuario esta activo con el UID

            //TODO: Usuarios conectados

            //TODO: Usuarios conectados para

            //TODO: Unirme a un chat grupal  Socket join

            //TODO: Escuchar cuando se envia mensajes para

            //TODO: DB que el usuario se desconector

            //TODO: emitir usuario conectados

        });
    }


}


module.exports = Sockets;