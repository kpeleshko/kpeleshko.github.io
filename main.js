document.querySelector('.hero__burger-btn').addEventListener('click', function() {
	document.querySelector('.hero__burger-content').classList.toggle('hero__burger-content--closed');
	document.querySelector('.hero__burger-icon').classList.toggle('hero__burger-icon--closed');
});

$(document).ready(function(){ 
    var entries = [  
        { image: 'img/skills/html.svg', width: '50', height: '50', tooltip: 'HTML', target: '_top' }, 
        { image: 'img/skills/js.svg', width: '50', height: '50', tooltip: 'JavaScript', target: '_top' }, 
        { image: 'img/skills/css.png', width: '50', height: '50', tooltip: 'CSS', target: '_top' }, 
        { image: 'img/skills/sass.svg', width: '50', height: '50', tooltip: 'SASS', target: '_top' }, 
        { image: 'img/skills/html.png', width: '50', height: '50', tooltip: 'HTML', target: '_top' }, 
        { image: 'img/skills/pug.png', width: '50', height: '50', tooltip: 'Pug', target: '_top' }, 
        { image: 'img/skills/gulp.png', width: '80', height: '80', tooltip: 'Gulp', target: '_top' }, 
        { image: 'img/skills/github-logo.svg', width: '50', height: '50', tooltip: 'GitHub', target: '_top' }, 
        { image: 'img/skills/webpack.png', width: '80', height: '80', tooltip: 'Webpack', target: '_top' }
    ];

    var settings = {
	    entries: entries,
	    width: 400,
	    height: 400,
	    radius: '80%',
	    radiusMin: 85,
	    bgDraw: false,
	    bgColor: '#fff',
	    opacityOver: 1.00,
	    opacityOut: 0.05,
	    opacitySpeed: 6,
	    fov: 800,
	    speed: 0.5,
	    fontFamily: 'Oswald, Arial, sans-serif',
	    fontSize: '15',
	    fontColor: '#000',
	    fontWeight: 'normal', //bold
	    fontStyle: 'normal', //italic 
	    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	    fontToUpperCase: true,
	    tooltipFontFamily: 'Oswald, Arial, sans-serif',
	    tooltipFontSize: '11',
	    tooltipFontColor: '#fff',
	    tooltipFontWeight: 'normal', //bold
	    tooltipFontStyle: 'normal', //italic 
	    tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	    tooltipFontToUpperCase: false,
	    tooltipTextAnchor: 'left',
	    tooltipDiffX: 0,
	    tooltipDiffY: 10,
	    animatingSpeed: 0.01,
	    animatingRadiusLimit: 1.3
	};

    $('#tag').svg3DTagCloud(settings);
})