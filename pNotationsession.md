/**
 * pAAConstructorSesion: Inicializa una nueva sesión de juego, cargando la configuración desde el almacenamiento si es necesario.
 * @param iAACargarDeAlmacenamiento_bool Indica si se debe cargar la sesión desde el almacenamiento.
 */
pAAConstructorSesion(iAACargarDeAlmacenamiento_bool?: bool) {
    @= iAASesionAlmacenada_str localStorage.getItem("gameSession")  // Valor almacenado de la sesión
    @= iAASesion_obj iAASesionAlmacenada_str && iAACargarDeAlmacenamiento_bool ? JSON.parse(iAASesionAlmacenada_str) : undefined

    @= iBBChessInstance_obj Chess()++  // Crear nueva instancia de ajedrez
    iBBChessInstance_obj.load(iAASesion_obj ? iAASesion_obj.position : iDBInitialPosition_str)

    @= iADTimer_obj iAASesion_obj ? iAASesion_obj.timer : iADInitialTimer_obj  // Configurar temporizador

    @= iABHistorial_arr iAASesion_obj ? iAASesion_obj.history : [{ timer: iADInitialTimer_obj, position: iDBInitialPosition_str }]

    @= iAACurrentIndex_num iAASesion_obj ? iAASesion_obj.currentIndex : 0

    @= iACListeners_obj { move: [], timer: [] }  // Inicializar oyentes

    pABIniciarTimer()!  // Iniciar temporizador
}