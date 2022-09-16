import emailjs from '@emailjs/browser';


export const Sender=(TLEmail,TLName)=>{

    const TemplateParams={
        to_email:TLEmail
        ,to_name:TLName
    }
    emailjs.send('service_evdoycs', 'template_digahzq',TemplateParams,"0x4TGJwuOrAE4uXeo" ).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
   
}


