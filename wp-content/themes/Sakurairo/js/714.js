(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[714],{6125:e=>{e.exports=function(e){return{name:"Q",aliases:["k","kdb"],keywords:{$pattern:/(`?)[A-Za-z0-9_]+\b/,keyword:"do while select delete by update from",literal:"0b 1b",built_in:"neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",type:"`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"},contains:[e.C_LINE_COMMENT_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE]}}},4175:e=>{e.exports=function(e){const n="[a-zA-Z_][a-zA-Z0-9\\._]*",a={className:"attribute",begin:"\\bid\\s*:",starts:{className:"string",end:n,returnEnd:!1}},i={begin:n+"\\s*:",returnBegin:!0,contains:[{className:"attribute",begin:n,end:"\\s*:",excludeEnd:!0,relevance:0}],relevance:0},r={begin:e.regex.concat(n,/\s*\{/),end:/\{/,returnBegin:!0,relevance:0,contains:[e.inherit(e.TITLE_MODE,{begin:n})]};return{name:"QML",aliases:["qt"],case_insensitive:!1,keywords:{keyword:"in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"},contains:[{className:"meta",begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{begin:/</,end:/>\s*[);\]]/,relevance:0,subLanguage:"xml"}],relevance:0},{className:"keyword",begin:"\\bsignal\\b",starts:{className:"string",end:"(\\(|:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"keyword",begin:"\\bproperty\\b",starts:{className:"string",end:"(:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:"\\."+e.IDENT_RE,relevance:0},a,i,r],illegal:/#/}}},6941:e=>{e.exports=function(e){const n=e.regex,a=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),r=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,s=n.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:a,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:a},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[r,i]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[s,i]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},match:[a,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:r},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:s},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}},3150:e=>{e.exports=function(e){const n="~?[a-z$_][0-9a-zA-Z$_]*",a="`?[A-Z$_][0-9a-zA-Z$_]*",i="'?[a-z$_][0-9a-z$_]*",r=n+"("+("\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*("+i+"\\s*(,"+i+"\\s*)*)?\\))?")+"){0,2}",s="("+(["||","++","**","+.","*","/","*.","/.","..."].map((function(e){return e.split("").map((function(e){return"\\"+e})).join("")})).join("|")+"|\\|>|&&|==|===)"),t="\\s+"+s+"\\s+",o={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},c="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",l={className:"number",relevance:0,variants:[{begin:c},{begin:"\\(-"+c+"\\)"}]},d={className:"operator",relevance:0,begin:s},m=[{className:"identifier",relevance:0,begin:n},d,l],g=[e.QUOTE_STRING_MODE,d,{className:"module",begin:"\\b"+a,returnBegin:!0,relevance:0,end:".",contains:[{className:"identifier",begin:a,relevance:0}]}],b=[{className:"module",begin:"\\b"+a,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:a,relevance:0}]}],p={className:"function",relevance:0,keywords:o,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:r},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:n,end:"(,|\\n|\\))",relevance:0,contains:[d,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:b}]}]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};g.push(p);const u={className:"constructor",begin:a+"\\(",end:"\\)",illegal:"\\n",keywords:o,contains:[e.QUOTE_STRING_MODE,d,{className:"params",begin:"\\b"+n}]},_={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:o,end:"=>",relevance:0,contains:[u,d,{relevance:0,className:"constructor",begin:a}]},E={className:"module-access",keywords:o,returnBegin:!0,variants:[{begin:"\\b("+a+"\\.)+"+n},{begin:"\\b("+a+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[p,{begin:"\\(",end:"\\)",relevance:0,skip:!0}].concat(g)},{begin:"\\b("+a+"\\.)+\\{",end:/\}/}],contains:g};return b.push(E),{name:"ReasonML",aliases:["re"],keywords:o,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[e.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},e.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:m},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:m},u,{className:"operator",begin:t,illegal:"--\x3e",relevance:0},l,e.C_LINE_COMMENT_MODE,_,p,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+a+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:o,relevance:0,contains:[{className:"module",relevance:0,begin:a},{begin:/\{/,end:/\}/,relevance:0,skip:!0}].concat(g)},E]}}},7800:e=>{e.exports=function(e){return{name:"RenderMan RIB",keywords:"ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",illegal:"</",contains:[e.HASH_COMMENT_MODE,e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}}},9090:e=>{e.exports=function(e){const n="[a-zA-Z-_][^\\n{]+\\{",a={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+n,end:/\}/,keywords:"facet",contains:[a,e.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+n,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",a,e.HASH_COMMENT_MODE]},{begin:"^"+n,end:/\}/,contains:[a,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}},7205:e=>{e.exports=function(e){const n="foreach do while for if from to step else on-error and or not in",a="true false yes no nothing nil null",i={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]},s={className:"string",begin:/'/,end:/'/};return{name:"MikroTik RouterOS script",aliases:["mikrotik"],case_insensitive:!0,keywords:{$pattern:/:?[\w-]+/,literal:a,keyword:n+" :"+n.split(" ").join(" :")+" :"+"global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")},contains:[{variants:[{begin:/\/\*/,end:/\*\//},{begin:/\/\//,end:/$/},{begin:/<\//,end:/>/}],illegal:/./},e.COMMENT("^#","$"),r,s,i,{begin:/[\w-]+=([^\s{}[\]()>]+)/,relevance:0,returnBegin:!0,contains:[{className:"attribute",begin:/[^=]+/},{begin:/=/,endsWithParent:!0,relevance:0,contains:[r,s,i,{className:"literal",begin:"\\b("+a.split(" ").join("|")+")\\b"},{begin:/("[^"]*"|[^\s{}[\]]+)/}]}]},{className:"number",begin:/\*[0-9a-fA-F]+/},{begin:"\\b("+"add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|")+")([\\s[(\\]|])",returnBegin:!0,contains:[{className:"built_in",begin:/\w+/}]},{className:"built_in",variants:[{begin:"(\\.\\./|/|\\s)(("+"traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|")+");?\\s)+"},{begin:/\.\./,relevance:0}]}]}}},8827:e=>{e.exports=function(e){const n={match:[/(surface|displacement|light|volume|imager)/,/\s+/,e.IDENT_RE],scope:{1:"keyword",3:"title.class"}};return{name:"RenderMan RSL",keywords:{keyword:["while","for","if","do","return","else","break","extern","continue"],built_in:["abs","acos","ambient","area","asin","atan","atmosphere","attribute","calculatenormal","ceil","cellnoise","clamp","comp","concat","cos","degrees","depth","Deriv","diffuse","distance","Du","Dv","environment","exp","faceforward","filterstep","floor","format","fresnel","incident","length","lightsource","log","match","max","min","mod","noise","normalize","ntransform","opposite","option","phong","pnoise","pow","printf","ptlined","radians","random","reflect","refract","renderinfo","round","setcomp","setxcomp","setycomp","setzcomp","shadow","sign","sin","smoothstep","specular","specularbrdf","spline","sqrt","step","tan","texture","textureinfo","trace","transform","vtransform","xcomp","ycomp","zcomp"],type:["matrix","float","color","point","normal","vector"]},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"#",end:"$"},n,{beginKeywords:"illuminate illuminance gather",end:"\\("}]}}},1106:e=>{e.exports=function(e){const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",i=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),r=n.concat(i,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},t={className:"doctag",begin:"@[A-Za-z]+"},o={begin:"#<",end:">"},c=[e.COMMENT("#","$",{contains:[t]}),e.COMMENT("^=begin","^=end",{contains:[t],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],l={className:"subst",begin:/#\{/,end:/\}/,keywords:s},d={className:"string",contains:[e.BACKSLASH_ESCAPE,l],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,l]})]}]},m="[0-9](_?[0-9])*",g={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},b={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},p=[d,{variants:[{match:[/class\s+/,r,/\s+<\s+/,r]},{match:[/\b(class|module)\s+/,r]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,r],scope:{2:"title.class"},keywords:s},{relevance:0,match:[r,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:i,scope:"title.class"},{match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[b]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[d,{begin:a}],relevance:0},g,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,l],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(o,c),relevance:0}].concat(o,c);l.contains=p,b.contains=p;const u=[{begin:/^\s*=>/,starts:{end:"$",contains:p}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:s,contains:p}}];return c.unshift(o),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(u).concat(c).concat(p)}}}}]);
//# sourceMappingURL=714.js.map