// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  PARAMS:'params',
    INTENTS:'value',
    ANSWER_LOGIN:'answerLogin',
    USER_ERROR:'El usuario que ingreso no es válido',
    LONG_EMAIL:50,
    EMPTY_INPUT: '',
    EMAIL_REGEX:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    VALUE_DECREASE:1,
    MIN_LENGTH_PASSWORD:8,
    MAX_LENGTH_PASSWORD:50,
    MENU:'menu',
    ERROR_SERVIDOR:'Error en el servidor',
    POINT:'.',
    SLICE:1,
    DATOS_CORRECTOS: 'Los datos han sido guardados correctamente',
    EMAIL: 'Correo electrónico invalido',
};

export const routesWeb = {
  ROOT:'/',
};

export const DIALOG_TITLES = {
  LOGOUT:'¿Deseas cerrar sesión?'
}
