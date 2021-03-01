(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),b=(a(0),a(86)),l={id:"endpoints",title:"Endpoints"},o={unversionedId:"endpoints",id:"endpoints",isDocsHomePage:!1,title:"Endpoints",description:"POST /remove-noise",source:"@site/docs/endpoints.md",slug:"/endpoints",permalink:"/endpoints",version:"current",sidebar:"sidebar",previous:{title:"Audo AI Docs",permalink:"/"},next:{title:"Python API",permalink:"/python-api"}},c=[],i={toc:c};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{style:{display:"inline"}},Object(b.b)("h2",{style:{display:"inline",paddingRight:10}},"POST /remove-noise "),Object(b.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(b.b)("i",null,"https://api.audo.ai/v1/remove-noise"),Object(b.b)("br",null))),Object(b.b)("div",{style:{height:14}}),Object(b.b)("p",null,"Submit an audio file to the API for noise removal."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Form data: ",Object(b.b)("inlineCode",{parentName:"li"},"file=@path/to/file.wav")),Object(b.b)("li",{parentName:"ul"},"Url params: ",Object(b.b)("inlineCode",{parentName:"li"},"?outputExt=mp3"))),Object(b.b)("p",null,"Response:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": "string"\n}\n')),Object(b.b)("details",null,Object(b.b)("summary",{style:{paddingBottom:20}},"Example"),Object(b.b)("p",null,Object(b.b)("p",null,"Simple example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.audo.ai/v1/remove-noise" -F "file=@myaudio.wav" -H "x-api-key: $AUDO_API_KEY"\n')),Object(b.b)("p",null,"Remove noise from a video:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.audo.ai/v1/remove-noise?outputExt=mp4" -F "file=@myvideo.mp4" -H "x-api-key: $AUDO_API_KEY"\n')),Object(b.b)("p",null,"Convert between audio formats:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.audo.ai/v1/remove-noise?outputExt=mp3" -F "file=@myaudio.ogg" -H "x-api-key: $AUDO_API_KEY"\n')),Object(b.b)("p",null,"See how to get the result from the job ID below."))),Object(b.b)("div",{style:{display:"inline"}},Object(b.b)("h2",{style:{display:"inline",paddingRight:10}},"GET /remove-noise/<jobId>/status "),Object(b.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(b.b)("i",null,"https://api.audo.ai/v1/remove-noise/<jobId>/status"),Object(b.b)("br",null))),Object(b.b)("div",{style:{height:14}}),Object(b.b)("p",null,"Retrieve the status of a job. Response possibilities:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "queued", "jobsAhead": <number>}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "in_progress", "percent": <number>}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "succeeded", "processedPath": "<processedPath>"}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "failed", "reason": "<reason>"}\n')),Object(b.b)("details",null,Object(b.b)("summary",{style:{paddingBottom:10}},"Example"),Object(b.b)("p",null,Object(b.b)("p",null,"Here is an example:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\ncurl -X GET "https://api.audo.ai/v1/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n    "state": "succeeded",\n    "processedPath": "dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3"\n}\n')),Object(b.b)("p",null,"So, now we would be able to download our file by prepending ",Object(b.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3\n")))),Object(b.b)("div",{style:{display:"inline"}},Object(b.b)("h2",{style:{display:"inline",paddingRight:10}},"WEBSOCKET /wss/remove-noise/<jobId>/status "),Object(b.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(b.b)("i",null,"ws://api.audo.ai/v1/wss/remove-noise/<jobId>/status"),Object(b.b)("br",null))),Object(b.b)("div",{style:{height:14}}),Object(b.b)("p",null,"Retrieve the status of a job in realtime without polling. This is a completely optional alternative method to find the status of a job."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Message format: Each message is a json encoded object in the exact same representation as the endpoint above:")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "queued", "jobsAhead": <number>}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "in_progress", "percent": <number>}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "succeeded", "processedPath": "<processedPath>"}\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "failed", "reason": "<reason>"}\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Finally, don't forget to include the authentication header when connecting via ",Object(b.b)("inlineCode",{parentName:"li"},"x-api-key: $AUDO_API_KEY"),".")),Object(b.b)("details",null,Object(b.b)("summary",{style:{paddingBottom:10}},"Example"),Object(b.b)("p",null,Object(b.b)("p",null,"Here is an example that uses ",Object(b.b)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),":"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\nwebsocat "wss://api.audo.ai/v1/wss/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{"state": "queued", "jobsAhead": 0}\n{"state": "in_progress", "percent": 10}\n{"state": "in_progress", "percent": 18}\n{"state": "in_progress", "percent": 20}\n// ...\n{"state": "in_progress", "percent": 95}\n{"state": "in_progress", "percent": 98}\n{"state": "in_progress", "percent": 100}\n{"state": "succeeded", "processedPath": "dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav"}\n')),Object(b.b)("p",null,"So, same as before, we can now download our file by prepending ",Object(b.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav\n")))))}p.isMDXComponent=!0}}]);