import emailjs from '@emailjs/browser';


export const Sender=(TLEmail,TName)=>{

    const TemplateParams={
        to_email:TLEmail
        ,team_name:TName
    }
    emailjs.send('service_evdoycs', 'template_digahzq',TemplateParams,"0x4TGJwuOrAE4uXeo" ).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
   
}


