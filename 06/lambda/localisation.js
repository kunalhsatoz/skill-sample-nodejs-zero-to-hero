// positive sound for birthday greeting from Alexa Sound Library
// https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html
const POSITIVE_SOUND = `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`;
// greeting (speechcon)
// https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-us.html
const GREETING_SPEECHCON = `<say-as interpret-as="interjection">eureka</say-as>`;
const DOUBT_SPEECHCON = `<say-as interpret-as="interjection">hmm</say-as>`;

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: `Welcome to Happy Birthday {{name}}. Let's have some fun with your birthday! `,
            WELCOME_BACK_MSG: 'Welcome back {{name}}! ',
            REJECTED_MSG: 'No problem. Please say the date again so I can get it right.',
            DAYS_LEFT_MSG: `{{name}} There's {{count}} day left `,
            DAYS_LEFT_MSG_plural: '{{name}} There are {{count}} days left ',
            WILL_TURN_MSG: `until you're {{count}} year old. `,
            WILL_TURN_MSG_plural: `until you're {{count}} years old. `,
            GREET_MSG: POSITIVE_SOUND + GREETING_SPEECHCON + ' {{name}} ',
            NOW_TURN_MSG: `You're now {{count}} year old! `,
            NOW_TURN_MSG_plural: `You're now {{count}} years old! `,
            MISSING_MSG: DOUBT_SPEECHCON + `. It looks like you haven't told me your birthday yet. `,
            POST_SAY_HELP_MSG: `If you want to change the date, try saying, register my birthday. You can also try to set up a reminder for your birthday. What would you like to do next? `,
            HELP_MSG: 'I can remember your birthday if you tell me the date. Or I can tell you the remaining days until your next birthday. Which one would you like to try? ',
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next? `,
            GOODBYE_MSG: ['Goodbye {{name}}! ', 'So long {{name}}! ', 'See you later {{name}}! ', 'Cheers {{name}}! '],
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: `Sorry, I don't know about that. Please try again.`,
            ERROR_MSG: 'Sorry, there was an error. Please try again.',
            NO_TIMEZONE_MSG: `I can't determine your timezone. Please check your device settings and make sure a timezone was selected. After that please reopen the skill and try again!`,
            REMINDER_ERROR_MSG: 'Sorry, there was an error creating the reminder. ',
            UNSUPPORTED_DEVICE_MSG: `This device doesn't support this operation. `,
            CANCEL_MSG: `Ok. Let's cancel that. `,
            MISSING_PERMISSION_MSG: `It looks like you haven't granted permissions for reminders. I have just sent you a card to your Alexa app so you can quickly enable this. `,
            POST_REMINDER_HELP_MSG: `If you want to know when your reminder will trigger, you can say, how many days until my birthday. What would you like to do next?`
        }
    },
    es: {
        translation: {
            WELCOME_MSG: 'Te doy la bienvenida a Feliz Cumpleaños {{name}}. Vamos a divertirnos un poco con tu cumpleaños! ',
            WELCOME_BACK_MSG: 'Te doy la bienvenida otra vez {{name}}! ',
            REJECTED_MSG: 'No pasa nada. Por favor dime la fecha otra vez y lo corregimos. ',
            DAYS_LEFT_MSG: '{{name}} Queda {{count}} día ',
            DAYS_LEFT_MSG_plural: '{{name}} Quedan {{count}} días ',
            WILL_TURN_MSG: 'para que cumplas {{count}} año. ',
            WILL_TURN_MSG_plural: 'para que cumplas {{count}} años. ',
            GREET_MSG: POSITIVE_SOUND + GREETING_SPEECHCON + ' {{name}} ',
            NOW_TURN_MSG: 'Hoy cumples {{count}} año! ',
            NOW_TURN_MSG_plural: 'Hoy cumples {{count}} años! ',
            MISSING_MSG: DOUBT_SPEECHCON + '. Parece que aun no me has dicho tu fecha de cumpleaños. ',
            POST_SAY_HELP_MSG: `Si quieres cambiar la fecha puedes decir, registra mi cumpleaños. También puedes crear un recordatorio para cuando cumplas. Qué quieres hacer? `,
            HELP_MSG: 'Puedo recordar tu cumpleaños si me dices una fecha. O decirte cuanto falta para que cumplas. Qué quieres hacer? ',
            REPROMPT_MSG: 'Si no sabes como continuar intent pedir ayuda. Si quieres salir solo dí para. Qué quieres hacer? ',
            GOODBYE_MSG: ['Hasta luego {{name}}! ', 'Adios {{name}}! ', 'Hasta pronto {{name}}! ', 'Nos vemos {{name}}! '],
            REFLECTOR_MSG: 'Acabas de activar {{intent}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez. ',
            ERROR_MSG: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez. ',
            NO_TIMEZONE_MSG: 'No he podido determinar tu zona horaria. Verifica la configuración de tu dispositivo, abre otraa vez la skill e inténtalo otra vez.',
            REMINDER_CREATED_MSG: '{{name}} Tu recordatorio se ha creado con éxito. ',
            REMINDER_ERROR_MSG: 'Perdona, ha habido un error al crear el recordatorio. ',
            UNSUPPORTED_DEVICE_MSG: 'Este dispositivo no soporta la operación que estás intentando realizar. ',
            CANCEL_MSG: 'Vale. Lo cancelamos. ',
            MISSING_PERMISSION_MSG: 'Parece que no has autorizado el envío de recordatorios. Te he enviado una tarjeta a la app Alexa para que lo habilites. ',
            POST_REMINDER_HELP_MSG: 'Si quieres saber cuando se aactivará tu recordatorio puedes decir, cuanto falta para mi cumpleaños. Qué quieres hacer ahora?'
        }
    }
}
