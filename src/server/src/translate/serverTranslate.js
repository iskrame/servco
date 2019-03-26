module.exports =  function serverLenguaje() {
    const bandera = false;
    let lenguaje=
            {
                enteredEmail : " ",
                emailnotFound : " ",
                wrongPassword : " ",
                notEmail : " ",
                servco : " ",
                passRecovery : " ",
                greeting : " ",
                msn1 : " ",
                msn2 : " ",
                mailRequired : " ",
                passRequired : " ",
                mailFormat : " ",
                passLength : " ",
                invalidFormatEmail : " ",
                emptyFields : " ",
                passNotMatch : " "
            }
        if (bandera) {
            lenguaje=
                {
                    //es
                    enteredEmail : "El correo ingresado ya se encuenta registrado",
                    emailnotFound : "Usuario no encontrado",
                    wrongPassword : "Contraseña Incorrecta",
                    notEmail: "El correo no se encuentra segistrado",
                    servco : "Servicios al Colaborador",
                    passRecovery : "Recuperacion de Contraseña",
                    greeting : "Hola, ",
                    msn1 : "Recibimos la solicitud de recuperación de contraseña para su cuenta en 'Servicios al colaborador'."+
                    "Para concluir el proceso y cambiar su contraseña, diríjase a la siguiente dirección:",
                    msn2 : "En la mayoría de programas de correo electrónico el enlace anterior debería aparecer en azul y puede hacer clic sobre él."+
                    "Si no funcionara, córtelo y péguelo en la ventana de direcciones de su navegador."+
                    "Si necesita ayuda adicional, póngase en contacto con el administrador."+
                    "Enrique Perez Rul correoElectronicoAdministrador.",
                    mailRequired : "Correo Requerido",
                    passRequired : "Contraseña Requerida",
                    mailFormat : "Formato de correo incorrecto",
                    passLength : "Contraseña tiene que tener entre 8 y 50 caracteres",
                    invalidFormatEmail : "Formato de correo incorrecto",
                    emptyFields : "No se permiten campos vacíos",
                    passNotMatch : "Las contraseñas no coinciden"
                }
            
            }else{
                lenguaje=
                {
                    //en
                    enteredEmail : "The entered email is already registered",
                    emailnotFound : "User not found",
                    wrongPassword : "Wrong Password",
                    notEmail : "Mail is not segregated",
                    servco : "Services to the Collaborator",
                    passRecovery : "Password Recovery",
                    greeting : "Hello, ",
                    msn1 : "We received the password recovery request for your account in 'Services to the collaborator'."+
                    "To complete the process and change your password, go to the following address:",
                    msn2 : "In most email programs the above link should appear in blue and you can click on it. If it does not work, cut it and paste it into your browser's address window."+
                    "If you need additional help, contact the administrator."+                    
                    "Enrique Perez Rul"+
                    "E-mailAdministrator.",
                    emailFormat : "Invalid Format",
                    mailRequired : "Mail Required",
                    passRequired : "Password required",
                    mailFormat : "Incorrect email format",
                    passLength : "Password must be between 8 and 50 characters",
                    invalidFormatEmail : "Incorrect email format",
                    emptyFields : "Empty fields are not allowed",
                    passNotMatch : "Passwords do not match"
                }
            }
        return lenguaje;
    }