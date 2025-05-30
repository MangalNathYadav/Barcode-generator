 const para= document.querySelectorAll("p");
    
        // This function applies CSS styles to all <p> elements
      for(let i =0 ; i<para.length; i++){
        para[i].style.textAlign = "left";
      }

        // css for root
       document.querySelectorAll('*').forEach(el => {
  el.style.boxSizing = 'border-box';
});


        //body css
        const bodyCss= document.body.style
        bodyCss.margin= "50px";
        bodyCss.fontFamily=" 'Poppins',sans-serif";
        bodyCss.background = "linear-gradient(135deg,#f0f4f8,#d9e2ec";
        bodyCss.minHeight = "100vh";
        bodyCss.overflowY= "auto";
        bodyCss.display= "flex";
        bodyCss.justifyContent= "center";
        bodyCss.alignItems= "center";

        //container css
        const containerCss = document.querySelector(".container").style;
        containerCss.background = "rgba(255, 255, 255, 0.9)";
        containerCss.backdropFilter= "blur(10px)";
        containerCss.borderRadius = "20px";
        containerCss.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
        containerCss.maxWidth = "500px";
        containerCss.width = "100%";
        containerCss.textAlign = "center";
        containerCss.padding = "40px";
        containerCss.marginTop = "5px";
        containerCss.paddingTop = "5px";


        //h1 css
        const h1Css = document.querySelector("h1").style;
        h1Css.margin = "10px";
        h1Css.paddingTop= "20px";
        h1Css.fontSize = "28px";
        h1Css.color = "#333";
      
        // input css
        const inputCss = document.querySelectorAll("input");
        for(let i = 0; i < inputCss.length; i++) {
            const inpStyle = inputCss[i].style;
            inpStyle.width = "100%";
            inpStyle.padding = "12px 16px";
            inpStyle.margin = "10px 0";
            inpStyle.border = "2px solid #ccc";
            inpStyle.borderRadius = "10px";
            inpStyle.fontSize = "16px";
            inpStyle.transition = "border-color 0.3s ease, box-shadow 0.3s ease"
            // input focus css
            inputCss[i].addEventListener("focus", function() {
                this.style.outline = "none";
                this.style.borderColor = "#3f8efc";
                this.style.boxShadow = "0 0 5px rgba(63, 142, 252, 0.4)";
        })}
        ;

        // button css
        const buttonCss = document.querySelectorAll("button");
        for(let i = 0; i < buttonCss.length; i++) {
            const buttStyle = buttonCss[i].style;
            buttStyle.background = "#3f8efc";
            buttStyle.color = "white";
            buttStyle.padding = "12px 20px";
            buttStyle.border = "none";
            buttStyle.borderRadius = "8px";
            buttStyle.fontSize = "16px";
            buttStyle.cursor = "pointer";
            buttStyle.transition = "background 0.3s ease, transform 0.2s ease";
            buttStyle.margin = "10px 8px 0";
            buttStyle.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            
            // button hover css
            buttonCss[i].addEventListener("mouseover", function() {
                this.style.transform = "scale(1.05)";
            });
            buttonCss[i].addEventListener("mouseout", function() {
                this.style.transform = "scale(1)";
            });
        }

        // canvas css
        const canvasCss = document.querySelectorAll("canvas");
        for(let i = 0; i < canvasCss.length; i++) {
            const canStyle = canvasCss[i].style;
            canStyle.margin = "30px";
            canStyle.background = "white";
            canStyle.borderRadius = "10px";
            canStyle.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            canStyle.padding = "10px";
        }
        
        // footer css
        const footerCss = document.querySelectorAll("footer");
        for(let i = 0; i < footerCss.length; i++) {
            fooStyle= footerCss[i].style 
            fooStyle.margin = "20px";
            fooStyle.textAlign = "center";
            fooStyle.fontSize = "14px";
            fooStyle.color = "#555";
        }

    
