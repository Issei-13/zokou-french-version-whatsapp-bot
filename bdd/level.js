function a9_0x3076(_0x32c570,_0x17f8e8){const _0x2f7c7d=a9_0x2f7c();return a9_0x3076=function(_0x3076ae,_0x2057f7){_0x3076ae=_0x3076ae-0x1b0;let _0xea9591=_0x2f7c7d[_0x3076ae];return _0xea9591;},a9_0x3076(_0x32c570,_0x17f8e8);}const a9_0x54f549=a9_0x3076;(function(_0x59eb81,_0x41b013){const _0x23b692=a9_0x3076,_0x4886a8=_0x59eb81();while(!![]){try{const _0x1fccf8=parseInt(_0x23b692(0x1b7))/0x1+-parseInt(_0x23b692(0x1b6))/0x2*(parseInt(_0x23b692(0x1b5))/0x3)+-parseInt(_0x23b692(0x1b0))/0x4*(parseInt(_0x23b692(0x1c5))/0x5)+-parseInt(_0x23b692(0x1cc))/0x6*(-parseInt(_0x23b692(0x1be))/0x7)+parseInt(_0x23b692(0x1b2))/0x8*(parseInt(_0x23b692(0x1cd))/0x9)+parseInt(_0x23b692(0x1bf))/0xa*(parseInt(_0x23b692(0x1c0))/0xb)+parseInt(_0x23b692(0x1bb))/0xc*(-parseInt(_0x23b692(0x1bd))/0xd);if(_0x1fccf8===_0x41b013)break;else _0x4886a8['push'](_0x4886a8['shift']());}catch(_0x2a497f){_0x4886a8['push'](_0x4886a8['shift']());}}}(a9_0x2f7c,0x83be7),require('dotenv')[a9_0x54f549(0x1cb)]());const {Pool}=require('pg'),s=require(a9_0x54f549(0x1c6)),dbUrl=s[a9_0x54f549(0x1b3)]?s['DATABASE_URL']:a9_0x54f549(0x1c3),proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);function a9_0x2f7c(){const _0x19fe93=['SELECT\x20*\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1','16dxveED','DATABASE_URL','Erreur\x20lors\x20de\x20la\x20récupération\x20du\x20bottom\x2010\x20des\x20utilisateurs:','24Polkia','142522nZWbXE','612351oxmcke','connect','SELECT\x20messages,\x20xp\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1','UPDATE\x20users_rank\x20SET\x20xp\x20=\x20xp\x20+\x2010,\x20messages\x20=\x20messages\x20+\x201\x20WHERE\x20jid\x20=\x20$1','1092nbgpOV','rows','166933UseJkR','74837xyRCvW','10QeHaVQ','7685524MBACnq','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users_rank\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20SERIAL\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20VARCHAR(255)\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20messages\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','query','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','release','40wHCnCR','../set','error','SELECT\x20jid,\x20xp\x20,\x20messages\x20FROM\x20users_rank\x20ORDER\x20BY\x20xp\x20DESC\x20LIMIT\x2010','length','exports','config','474wCjpvp','4440573rLOYyU','432088EBdVRE'];a9_0x2f7c=function(){return _0x19fe93;};return a9_0x2f7c();}async function createUsersRankTable(){const _0x29cff1=a9_0x54f549,_0x3bff3d=await pool['connect']();try{await _0x3bff3d[_0x29cff1(0x1c2)](_0x29cff1(0x1c1));}catch(_0x84c6ce){console[_0x29cff1(0x1c7)]('Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20users_rank:',_0x84c6ce);}finally{_0x3bff3d[_0x29cff1(0x1c4)]();}}async function ajouterOuMettreAJourUserData(_0x2c16b9){const _0x8cd39b=a9_0x54f549,_0x18de8a=await pool[_0x8cd39b(0x1b8)]();try{const _0x40cfe5=await _0x18de8a[_0x8cd39b(0x1c2)](_0x8cd39b(0x1b1),[_0x2c16b9]),_0x494d7b=_0x40cfe5[_0x8cd39b(0x1bc)]['length']>0x0;_0x494d7b?await _0x18de8a[_0x8cd39b(0x1c2)](_0x8cd39b(0x1ba),[_0x2c16b9]):await _0x18de8a[_0x8cd39b(0x1c2)]('INSERT\x20INTO\x20users_rank\x20(jid,\x20xp,\x20messages)\x20VALUES\x20($1,\x20$2,\x20$3)',[_0x2c16b9,0xa,0x1]);}catch(_0x3c4226){console['error']('Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20de\x20l\x27utilisateur:',_0x3c4226);}finally{_0x18de8a[_0x8cd39b(0x1c4)]();}};async function getMessagesAndXPByJID(_0x37d433){const _0x2ecd5f=a9_0x54f549,_0x1507d3=await pool[_0x2ecd5f(0x1b8)]();try{const _0x3e598c=_0x2ecd5f(0x1b9),_0x5c1f29=await _0x1507d3[_0x2ecd5f(0x1c2)](_0x3e598c,[_0x37d433]);if(_0x5c1f29[_0x2ecd5f(0x1bc)][_0x2ecd5f(0x1c9)]>0x0){const {messages:_0x1f2726,xp:_0x4e2caf}=_0x5c1f29[_0x2ecd5f(0x1bc)][0x0];return{'messages':_0x1f2726,'xp':_0x4e2caf};}else return{'messages':0x0,'xp':0x0};}catch(_0x3e4671){return console[_0x2ecd5f(0x1c7)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20de\x20l\x27utilisateur:',_0x3e4671),{'messages':0x0,'xp':0x0};}finally{_0x1507d3['release']();}}async function getBottom10Users(){const _0xe9c114=a9_0x54f549,_0x2413f4=await pool[_0xe9c114(0x1b8)]();try{const _0xf3fb39=_0xe9c114(0x1c8),_0xd5cf23=await _0x2413f4[_0xe9c114(0x1c2)](_0xf3fb39);return _0xd5cf23[_0xe9c114(0x1bc)];}catch(_0x444739){return console[_0xe9c114(0x1c7)](_0xe9c114(0x1b4),_0x444739),[];}finally{_0x2413f4[_0xe9c114(0x1c4)]();}}createUsersRankTable(),module[a9_0x54f549(0x1ca)]={'ajouterOuMettreAJourUserData':ajouterOuMettreAJourUserData,'getMessagesAndXPByJID':getMessagesAndXPByJID,'getBottom10Users':getBottom10Users};