@= iAASessionStorage_obj "types"  // Importando tipos de datos
@= iABSessionHistory_arr "types"
@= iACSessionListeners_obj "types"
@= iADSessionTimer_obj "types"

@= iADInitialTimer_obj { white: 600, black: 600 }  // Timer inicial
@= iDBInitialPosition_str "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"  // Posición inicial

pAAClaseSession()! {
    @= iBBChessInstance_obj Chess()  // Crear nueva instancia de ajedrez

    pAACargarSession(iBBChessInstance_obj, iDBInitialPosition_str, iADInitialTimer_obj)! {
        // Lógica para cargar o iniciar una nueva sesión
    }

    pABIniciarTimer()! {
        // Iniciar temporizador
    }

    pAAMover(move: iCMove_obj) -> iCMoveResult_obj {
        // Lógica para realizar un movimiento
    }

    pAAReset()! {
        // Reiniciar juego
    }

    pAADeshacer()! {
        // Deshacer movimiento
    }

    pAARehacer()! {
        // Rehacer movimiento
    }

    pAAGuardar()! {
        // Guardar estado actual del juego
    }

    pAAEsFinDeJuego() -> bool {
        // Verificar si el juego ha terminado
    }

    pAAEsPrimerMovimiento() -> bool {
        // Verificar si es el primer movimiento
    }

    pAAObtenerPerdedor() -> iDColor_str {
        // Determinar el perdedor del juego
    }

    // Manejadores de eventos
    pAAEnCambioDeTablero(handler: iACSessionListeners_obj) {
        // Añadir oyente para cambios en el tablero
    }

    pAAEnCambioDeTimer(handler: iADSessionTimer_obj) {
        // Añadir oyente para cambios en el temporizador
    }

    pAADispararEvento<Events extends iACSessionListeners_obj>(event: Events, data: iACSessionListeners_obj) {
        // Disparar un evento específico
    }
}

pAAExportar pAAClaseSession!  // Exportar la clase GameSession
