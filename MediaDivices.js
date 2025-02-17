let Boleano;
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia(
        {video: true}
    )
    .then((Stream)=>{

        let Video = document.createElement('video');

        Video.width = '400';
        Video.height = '400';
        Video.autoplay = `true`;


        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode('Tenemos permiso');
        h1.append(h1Text);
        let body = document.querySelector('body');
        body.append(h1);




        
        Video.srcObject = Stream;
        body.append(Video);
        let btn = document.createElement('button');
        let BtnText = document.createTextNode('TOMAR FOTO');
        btn.append(BtnText);
        btn.addEventListener('click', () => {
            Boleano = false;
            let Canvas = document.createElement('canvas');
            Canvas.height = '500';
            Canvas.width = '500';
            
            let context = Canvas.getContext('2d');
            context.drawImage(Video,0,0);
            body.append(Canvas);

        });
        body.append(btn);



    })
    .catch(
        (Stream)=>{
            let h1 = document.createElement('h1');
            let h1Text = document.createTextNode('NOO tenemos dio acceso');
            h1.append(h1Text);
            let body = document.querySelector('body');
            body.append(h1);
            console.log(Stream)

        }
    );
}