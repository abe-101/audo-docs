(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),i=(n(0),n(86)),r={id:"python-api",title:"Python API"},s={unversionedId:"python-api",id:"python-api",isDocsHomePage:!1,title:"Python API",description:"Python Quickstart",source:"@site/docs/python-api.md",slug:"/python-api",permalink:"/python-api",version:"current",sidebar:"sidebar",previous:{title:"Endpoints",permalink:"/endpoints"},next:{title:"Other Languages",permalink:"/other-languages"}},p=[{value:"Python Quickstart",id:"python-quickstart",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"python-quickstart"},"Python Quickstart"),Object(i.b)("p",null,"Using our Python API, we can simplify calling the API down to just a few lines of code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from audoai.noise_removal import NoiseRemovalClient\n\nnoise_removal = NoiseRemovalClient(api_key='abc123')\nresult = noise_removal.process('my-audio.wav')\nresult.save('cleaned-audio.wav')\n")),Object(i.b)("p",null,"Note, this requires installing the ",Object(i.b)("inlineCode",{parentName:"p"},"audoai-noise-removal")," package on PyPI:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip3 install audoai-noise-removal\n")),Object(i.b)("p",null,"If you want to so something more specific like spawn multiple jobs at once or save the result into memory, have a look at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/audo-ai/audoai-python"},"the source code"),". Nearly all methods are documents and we will have generated documentation soon."))}l.isMDXComponent=!0}}]);