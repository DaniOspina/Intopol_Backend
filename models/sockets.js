const { checkJWT } = require('../helpers/jwt');
const { userConnected, userDisconnected } = require('../controllers/sockets');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            const [ valido, uid] = checkJWT( socket.handshake.query['x-token']  );         
            

            if ( !valido ) {
                console.log('socket no identificado');
                return socket.disconnect();
            }

            const user = await userConnected( uid );

            console.log("User connected: ", user.name)


            //TODO: Validate JWT
            //SI EL TOKEN NO ES VALIDO, DESCONECTAR

            //TODO: Saber que usuario esta activo con el UID

            //TODO: Usuarios conectados

            //TODO: Usuarios conectados para

            //TODO: Unirme a un chat grupal  Socket join

            //TODO: Escuchar cuando se envia mensajes para

            //TODO: DB que el usuario se desconector

            //TODO: emitir usuario conectados

            socket.on('disconnect', async() => {
                await userDisconnected( uid );
                console.log("User disconnected: ", user.name)
            })
            
        });
    }


}


module.exports = Sockets;