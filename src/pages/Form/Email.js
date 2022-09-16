import emailjs from '@emailjs/browser';


export const Sender=(form)=>{

    
    emailjs.sendForm('gmail', 'template_rrm8ncm', form.current, 'user_YF2S6xgJsbD4avgHCKpiT').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
   
}


