/* ================================================================
   AUTH GUARD — FoodCost 360
   Mostra overlay login direttamente nel tool, nessun redirect
================================================================ */
(async function(){
  var SUPABASE_URL='https://lhzpueahpfpqkipwqlgk.supabase.co';
  var SUPABASE_KEY='sb_publishable_RcX37_4t0429HeaBRYs03w_C-53rBQV';

  // Inietta CSS
  var style=document.createElement('style');
  style.textContent='#fc360-overlay{position:fixed;inset:0;background:#0C0C0E;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;font-family:"DM Sans",sans-serif}#fc360-overlay *{box-sizing:border-box}#fc360-box{background:#12121A;border:1px solid #2A2A3E;border-radius:16px;padding:32px 28px;width:100%;max-width:380px}#fc360-logo{text-align:center;margin-bottom:28px}.fc360-l1{font-family:"Bebas Neue",cursive;font-size:26px;letter-spacing:3px;color:#E8C547;display:block;line-height:1}.fc360-l2{font-family:"Bebas Neue",cursive;font-size:18px;letter-spacing:6px;color:#fff;display:block;line-height:1}.fc360-tabs{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:#0C0C0E;border-radius:10px;padding:4px;margin-bottom:24px}.fc360-tab{padding:9px;border-radius:7px;border:none;background:transparent;color:#6B6B8A;font-family:"DM Sans",sans-serif;font-size:14px;cursor:pointer}.fc360-tab.on{background:#1A1A24;color:#E8E8F0;border:1px solid #2A2A3E}.fc360-form{display:flex;flex-direction:column;gap:12px}.fc360-fg{display:flex;flex-direction:column;gap:4px}.fc360-fg label{font-size:11px;font-weight:600;color:#6B6B8A;text-transform:uppercase;letter-spacing:.5px}.fc360-fg input{background:#0C0C0E;border:1px solid #2A2A3E;border-radius:8px;padding:11px 14px;color:#E8E8F0;font-family:"DM Sans",sans-serif;font-size:14px;outline:none;width:100%;transition:.2s}.fc360-fg input:focus{border-color:rgba(232,197,71,.5)}.fc360-btn{background:linear-gradient(135deg,#E8C547,#C9A82C);color:#0C0C0E;border:none;border-radius:9px;padding:13px;font-family:"DM Sans",sans-serif;font-size:15px;font-weight:700;cursor:pointer;width:100%;margin-top:4px}.fc360-btn:disabled{opacity:.5;cursor:not-allowed}.fc360-div{display:flex;align-items:center;gap:8px;color:#6B6B8A;font-size:12px;margin:2px 0}.fc360-div::before,.fc360-div::after{content:"";flex:1;height:1px;background:#2A2A3E}.fc360-google{background:#1A1A24;color:#E8E8F0;border:1px solid #2A2A3E;border-radius:9px;padding:11px;font-family:"DM Sans",sans-serif;font-size:14px;cursor:pointer;width:100%;display:flex;align-items:center;justify-content:center;gap:8px}.fc360-google:hover{border-color:#6B6B8A}.fc360-msg{border-radius:8px;padding:10px 12px;font-size:13px;display:none;margin-bottom:4px}.fc360-msg.err{background:rgba(224,82,82,.1);border:1px solid rgba(224,82,82,.3);color:#E05252}.fc360-msg.ok{background:rgba(62,201,122,.1);border:1px solid rgba(62,201,122,.3);color:#3EC97A}.fc360-forgot{font-size:12px;color:#6B6B8A;text-align:right;cursor:pointer;background:none;border:none;font-family:"DM Sans",sans-serif;padding:0}.fc360-forgot:hover{color:#E8E8F0}.fc360-denied{text-align:center}.fc360-denied h2{font-family:"Bebas Neue",cursive;font-size:22px;color:#E8C547;margin:12px 0 8px}.fc360-denied p{font-size:13px;color:#6B6B8A;line-height:1.6;margin-bottom:20px}.fc360-shop{display:inline-block;background:linear-gradient(135deg,#E8C547,#C9A82C);color:#0C0C0E;border-radius:9px;padding:11px 24px;font-weight:700;font-size:14px;text-decoration:none}.fc360-out{background:none;border:none;color:#6B6B8A;font-size:12px;cursor:pointer;font-family:"DM Sans",sans-serif;margin-top:12px}#fc360-userbar{position:fixed;top:0;left:0;right:0;background:#12121A;border-bottom:1px solid #2A2A3E;padding:7px 16px;display:flex;align-items:center;justify-content:space-between;font-family:"DM Sans",sans-serif;font-size:12px;color:#6B6B8A;z-index:9999}.fc360-body-offset{padding-top:36px!important}@media(max-width:700px){.overlay:not(.hidden){padding-top:36px!important;align-items:flex-start!important}.overlay:not(.hidden) .modal{border-radius:0 0 14px 14px!important;max-height:calc(100dvh - 36px)!important}.overlay:not(.hidden) .modal .modal-footer{padding-bottom:calc(12px + env(safe-area-inset-bottom))!important}#fc360-settings-panel{width:min(300px,100vw)!important;max-height:calc(100vh - 36px)!important;overflow-y:auto!important}}@keyframes fc360spin{to{transform:rotate(360deg)}}.fc360-spin{width:16px;height:16px;border:2px solid rgba(12,12,14,.3);border-top-color:#0C0C0E;border-radius:50%;animation:fc360spin .6s linear infinite;display:inline-block}#fc360-settings-panel{position:fixed;top:36px;right:0;width:300px;background:#12121A;border:1px solid #2A2A3E;border-top:none;border-radius:0 0 0 12px;padding:20px;z-index:9998;display:none;box-shadow:-4px 4px 20px rgba(0,0,0,.4);font-family:"DM Sans",sans-serif}#fc360-settings-panel h3{font-family:"Bebas Neue",cursive;font-size:18px;letter-spacing:1px;color:#E8C547;margin-bottom:16px}#fc360-settings-panel .sp-section{margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #2A2A3E}#fc360-settings-panel .sp-section:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}#fc360-settings-panel .sp-label{font-size:10px;font-weight:600;color:#6B6B8A;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}#fc360-settings-panel .sp-value{font-size:13px;color:#E8E8F0;margin-bottom:8px;word-break:break-all}#fc360-settings-panel .sp-input{background:#0C0C0E;border:1px solid #2A2A3E;border-radius:7px;padding:9px 12px;color:#E8E8F0;font-family:"DM Sans",sans-serif;font-size:13px;outline:none;width:100%;margin-bottom:6px}#fc360-settings-panel .sp-input:focus{border-color:rgba(232,197,71,.5)}#fc360-settings-panel .sp-btn{background:linear-gradient(135deg,#E8C547,#C9A82C);color:#0C0C0E;border:none;border-radius:7px;padding:8px 16px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:700;cursor:pointer;width:100%;margin-top:2px}#fc360-settings-panel .sp-btn-ghost{background:none;border:1px solid #E05252;color:#E05252;border-radius:7px;padding:8px 16px;font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;cursor:pointer;width:100%;margin-top:6px}#fc360-settings-panel .sp-msg{font-size:12px;padding:7px 10px;border-radius:6px;margin-top:6px;display:none}#fc360-settings-panel .sp-msg.ok{background:rgba(62,201,122,.1);border:1px solid rgba(62,201,122,.3);color:#3EC97A}#fc360-settings-panel .sp-msg.err{background:rgba(224,82,82,.1);border:1px solid rgba(224,82,82,.3);color:#E05252}';
  document.head.appendChild(style);

  // Font
  if(!document.querySelector('link[href*="Bebas"]')){
    var lnk=document.createElement('link');
    lnk.rel='stylesheet';
    lnk.href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap';
    document.head.appendChild(lnk);
  }

  // Carica Supabase
  if(!window.supabase){
    await new Promise(function(resolve){
      var s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      s.onload=resolve;
      document.head.appendChild(s);
    });
  }

  var client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

  function showOverlay(){
    var div=document.createElement('div');
    div.id='fc360-overlay';
    div.innerHTML='<div id="fc360-box">'+
      '<div id="fc360-logo"><span class="fc360-l1">FOODCOST</span><span class="fc360-l2">360</span></div>'+
      '<div class="fc360-tabs">'+
        '<button class="fc360-tab on" id="fc360-t1" onclick="fc360Tab(\'login\')">Accedi</button>'+
        '<button class="fc360-tab" id="fc360-t2" onclick="fc360Tab(\'reg\')">Registrati</button>'+
      '</div>'+
      '<div class="fc360-msg" id="fc360-msg"></div>'+
      '<div class="fc360-form" id="fc360-login">'+
        '<div class="fc360-fg"><label>Email</label><input type="email" id="fc360-le" placeholder="mario@ristorante.it"></div>'+
        '<div class="fc360-fg"><label>Password</label><input type="password" id="fc360-lp" placeholder="••••••••" onkeydown="if(event.key===\'Enter\')fc360Login()"><button class="fc360-forgot" onclick="fc360Forgot()">Password dimenticata?</button></div>'+
        '<button class="fc360-btn" id="fc360-lbtn" onclick="fc360Login()">Accedi</button>'+
        '<div class="fc360-div">oppure</div>'+
        '<button class="fc360-google" onclick="fc360Google()"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>Continua con Google</button>'+
      '</div>'+
      '<div class="fc360-form" id="fc360-reg" style="display:none">'+
        '<div class="fc360-fg"><label>Nome e Cognome</label><input type="text" id="fc360-rn" placeholder="Mario Rossi"></div>'+
        '<div class="fc360-fg"><label>Email</label><input type="email" id="fc360-re" placeholder="mario@ristorante.it"></div>'+
        '<div class="fc360-fg"><label>Password</label><input type="password" id="fc360-rp" placeholder="Minimo 6 caratteri" onkeydown="if(event.key===\'Enter\')fc360Register()"></div>'+
        '<button class="fc360-btn" id="fc360-rbtn" onclick="fc360Register()">Crea account</button>'+
        '<div class="fc360-div">oppure</div>'+
        '<button class="fc360-google" onclick="fc360Google()"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>Continua con Google</button>'+
      '</div>'+
      '<div class="fc360-denied" id="fc360-denied" style="display:none">'+
        '<div style="font-size:40px">🔒</div>'+
        '<h2>Account non attivo</h2>'+
        '<p>Sei registrato ma non hai ancora un piano attivo.<br>Scegli il pacchetto che fa per te.</p>'+
        '<a href="/shop.html" class="fc360-shop">Vedi i piani →</a><br>'+
        '<button class="fc360-out" onclick="fc360Logout()">Esci dall\'account</button>'+
      '</div>'+
    '</div>';
    document.body.appendChild(div);
  }

  window.fc360Tab=function(t){
    document.getElementById('fc360-login').style.display=t==='login'?'flex':'none';
    document.getElementById('fc360-reg').style.display=t==='reg'?'flex':'none';
    document.getElementById('fc360-t1').className='fc360-tab'+(t==='login'?' on':'');
    document.getElementById('fc360-t2').className='fc360-tab'+(t==='reg'?' on':'');
    var m=document.getElementById('fc360-msg');if(m)m.style.display='none';
  };

  function showMsg(txt,tipo){var el=document.getElementById('fc360-msg');if(!el)return;el.textContent=txt;el.className='fc360-msg '+(tipo||'err');el.style.display='block';}
  function setBtn(id,on,lbl){var b=document.getElementById(id);if(!b)return;b.disabled=on;if(!on)b.textContent=lbl;}

  window.fc360Login=async function(){
    var email=document.getElementById('fc360-le').value.trim();
    var pwd=document.getElementById('fc360-lp').value;
    if(!email||!pwd){showMsg('Inserisci email e password');return;}
    setBtn('fc360-lbtn',true,'');showMsg('','');
    var res=await client.auth.signInWithPassword({email:email,password:pwd});
    if(res.error){showMsg(fc360Err(res.error.message));setBtn('fc360-lbtn',false,'Accedi');return;}
    await fc360Check(res.data.user);
  };

  window.fc360Register=async function(){
    var nome=document.getElementById('fc360-rn').value.trim();
    var email=document.getElementById('fc360-re').value.trim();
    var pwd=document.getElementById('fc360-rp').value;
    if(!nome||!email||!pwd){showMsg('Compila tutti i campi');return;}
    if(pwd.length<6){showMsg('Password minimo 6 caratteri');return;}
    setBtn('fc360-rbtn',true,'');showMsg('','');
    var res=await client.auth.signUp({email:email,password:pwd,options:{data:{full_name:nome}}});
    if(res.error){showMsg(fc360Err(res.error.message));setBtn('fc360-rbtn',false,'Crea account');return;}
    showMsg('✓ Registrazione completata! Controlla la tua email per confermare l\'account.','ok');
    setBtn('fc360-rbtn',false,'Crea account');
  };

  window.fc360Google=async function(){
    await client.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.href}});
  };

  window.fc360Forgot=async function(){
    var email=document.getElementById('fc360-le').value.trim();
    if(!email){showMsg('Inserisci prima la tua email');return;}
    await client.auth.resetPasswordForEmail(email,{redirectTo:window.location.href});
    showMsg('✓ Email inviata! Controlla la casella.','ok');
  };

  window.fc360Logout=async function(){
    await client.auth.signOut();
    location.reload();
  };

  function fc360Err(msg){
    if(msg.includes('Invalid login'))return 'Email o password non corretti';
    if(msg.includes('Email not confirmed'))return 'Devi confermare la tua email prima di accedere';
    if(msg.includes('already registered'))return 'Email già registrata — accedi invece';
    if(msg.includes('rate limit'))return 'Troppi tentativi, aspetta qualche minuto';
    return msg;
  }

  async function fc360Check(user){
    var res=await client.from('accessi').select('piano,attivo').eq('user_id',user.id).single();
    if(!res.data||!res.data.attivo){
      var l=document.getElementById('fc360-login');if(l)l.style.display='none';
      var r=document.getElementById('fc360-reg');if(r)r.style.display='none';
      var d=document.getElementById('fc360-denied');if(d)d.style.display='block';
      var t=document.querySelector('.fc360-tabs');if(t)t.style.display='none';
      return;
    }

    var piano=res.data.piano; // 'singolo', 'bundle', '360'
    var path=window.location.pathname;

    // Controlla se il piano permette l'accesso a questo tool
    var hasCucina=piano==='singolo-cucina'||piano==='cucina'||piano==='bundle'||piano==='360';
    var hasBar=piano==='singolo-bar'||piano==='bar'||piano==='bundle'||piano==='360';
    var hasQR=piano==='singolo-qr'||piano==='360';

    var denied=false;
    if(path.includes('foodcost-cucina')&&!hasCucina)denied=true;
    if(path.includes('beveragecost-bar')&&!hasBar)denied=true;
    if(path.includes('menu-qr')&&!hasQR)denied=true;

    if(denied){
      // Piano non include questo tool
      var l=document.getElementById('fc360-login');if(l)l.style.display='none';
      var r=document.getElementById('fc360-reg');if(r)r.style.display='none';
      var t=document.querySelector('.fc360-tabs');if(t)t.style.display='none';
      var d=document.getElementById('fc360-denied');
      if(d){
        d.style.display='block';
        var h2=d.querySelector('h2');
        if(h2)h2.textContent='Tool non incluso nel tuo piano';
        var p=d.querySelector('p');
        if(p)p.textContent='Il tuo piano "'+piano+'" non include questo tool. Fai l\'upgrade per accedere.';
      }
      return;
    }

    var overlay=document.getElementById('fc360-overlay');
    if(overlay)overlay.remove();
    showUserbar(user,piano);
  }

  function showUserbar(user,piano){
    var bar=document.createElement('div');
    bar.id='fc360-userbar';
    var nome=(user.user_metadata&&user.user_metadata.full_name)||user.email;

    var hasCucina=piano==='singolo-cucina'||piano==='cucina'||piano==='bundle'||piano==='360';
    var hasBar=piano==='singolo-bar'||piano==='bar'||piano==='bundle'||piano==='360';
    var hasQR=piano==='singolo-qr'||piano==='360';

    var links='';
    if(hasCucina)links+='<a href="/app/foodcost-cucina.html" style="color:#6B6B8A;text-decoration:none;font-size:11px">🍳 Cucina</a>';
    if(hasBar)links+='<a href="/app/beveragecost-bar.html" style="color:#6B6B8A;text-decoration:none;font-size:11px">🍸 Bar</a>';
    if(hasQR)links+='<a href="/app/menu-qr.html" style="color:#6B6B8A;text-decoration:none;font-size:11px">📱 QR</a>';

    bar.innerHTML=
      '<div style="display:flex;align-items:center;gap:10px">'+
        '<span style="font-family:\'Bebas Neue\',cursive;font-size:14px;letter-spacing:2px;color:#E8C547">FC360</span>'+
        '<span style="font-size:12px">'+nome+'</span>'+
        '<span style="background:rgba(232,197,71,.1);color:#E8C547;border:1px solid rgba(232,197,71,.2);padding:1px 7px;border-radius:10px;font-size:10px;font-weight:600;text-transform:uppercase">'+piano+'</span>'+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:10px">'+
        links+
        '<button onclick="fc360ToggleSettings()" style="background:none;border:1px solid #2A2A3E;color:#6B6B8A;border-radius:6px;padding:3px 10px;cursor:pointer;font-family:\'DM Sans\',sans-serif;font-size:13px" title="Impostazioni account">⚙️</button>'+
        '<button onclick="fc360Logout()" style="background:none;border:1px solid #2A2A3E;color:#6B6B8A;border-radius:6px;padding:3px 10px;cursor:pointer;font-family:\'DM Sans\',sans-serif;font-size:11px">Esci</button>'+
      '</div>';
    document.body.insertBefore(bar,document.body.firstChild);
    document.body.style.paddingTop='36px';
    // Fix mobile: corregge modal che partono da top:0 invece di sotto la userbar
    if(window.innerWidth<=700){
      var mobileStyle=document.createElement('style');
      mobileStyle.textContent=
        '.overlay:not(.hidden){padding-top:0!important;align-items:flex-start!important}'+
        '.overlay:not(.hidden) .modal{'+
          'position:fixed!important;'+
          'top:36px!important;'+
          'left:0!important;right:0!important;bottom:0!important;'+
          'max-height:calc(100dvh - 36px)!important;'+
          'border-radius:0!important;'+
          'width:100%!important;max-width:100%!important;'+
          'margin:0!important;'+
        '}'+
        '.overlay:not(.hidden) .modal .modal-footer{'+
          'padding-bottom:calc(14px + env(safe-area-inset-bottom))!important;'+
        '}';
      document.head.appendChild(mobileStyle);
    }

    // Crea il pannello impostazioni
    var panel=document.createElement('div');
    panel.id='fc360-settings-panel';
    panel.innerHTML=
      '<h3>⚙️ Il mio account</h3>'+

      // INFO ACCOUNT
      '<div class="sp-section">'+
        '<div class="sp-label">Email</div>'+
        '<div class="sp-value">'+user.email+'</div>'+
        '<div class="sp-label">Piano attivo</div>'+
        '<div class="sp-value" style="color:#E8C547;font-weight:700;text-transform:uppercase">'+piano+'</div>'+
      '</div>'+

      // CAMBIA PASSWORD
      '<div class="sp-section">'+
        '<div class="sp-label">Cambia password</div>'+
        '<input class="sp-input" type="password" id="sp-pwd-new" placeholder="Nuova password (min. 6 caratteri)">'+
        '<input class="sp-input" type="password" id="sp-pwd-confirm" placeholder="Conferma nuova password">'+
        '<button class="sp-btn" onclick="fc360ChangePwd()">Aggiorna password</button>'+
        '<div class="sp-msg" id="sp-pwd-msg"></div>'+
      '</div>'+

      // CAMBIA EMAIL
      '<div class="sp-section">'+
        '<div class="sp-label">Cambia email</div>'+
        '<input class="sp-input" type="email" id="sp-email-new" placeholder="Nuova email">'+
        '<button class="sp-btn" onclick="fc360ChangeEmail()">Aggiorna email</button>'+
        '<div class="sp-msg" id="sp-email-msg"></div>'+
      '</div>'+

      // LOGOUT
      '<div class="sp-section">'+
        '<button class="sp-btn-ghost" onclick="fc360Logout()">🚪 Esci dall\'account</button>'+
      '</div>';

    document.body.appendChild(panel);

    // Chiudi pannello cliccando fuori
    document.addEventListener('click',function(e){
      var panel=document.getElementById('fc360-settings-panel');
      var bar=document.getElementById('fc360-userbar');
      if(panel&&panel.style.display==='block'&&!panel.contains(e.target)&&!bar.contains(e.target)){
        panel.style.display='none';
      }
    });
  }

  window.fc360ToggleSettings=function(){
    var panel=document.getElementById('fc360-settings-panel');
    if(panel)panel.style.display=panel.style.display==='block'?'none':'block';
  };

  window.fc360ChangePwd=async function(){
    var pwd=document.getElementById('sp-pwd-new').value;
    var confirm=document.getElementById('sp-pwd-confirm').value;
    var msg=document.getElementById('sp-pwd-msg');
    msg.style.display='none';
    if(!pwd||pwd.length<6){msg.textContent='La password deve avere almeno 6 caratteri';msg.className='sp-msg err';msg.style.display='block';return;}
    if(pwd!==confirm){msg.textContent='Le password non coincidono';msg.className='sp-msg err';msg.style.display='block';return;}
    var res=await client.auth.updateUser({password:pwd});
    if(res.error){msg.textContent='Errore: '+res.error.message;msg.className='sp-msg err';}
    else{msg.textContent='✓ Password aggiornata!';msg.className='sp-msg ok';document.getElementById('sp-pwd-new').value='';document.getElementById('sp-pwd-confirm').value='';}
    msg.style.display='block';
  };

  window.fc360ChangeEmail=async function(){
    var email=document.getElementById('sp-email-new').value.trim();
    var msg=document.getElementById('sp-email-msg');
    msg.style.display='none';
    if(!email||!email.includes('@')){msg.textContent='Inserisci un\'email valida';msg.className='sp-msg err';msg.style.display='block';return;}
    var res=await client.auth.updateUser({email:email});
    if(res.error){msg.textContent='Errore: '+res.error.message;msg.className='sp-msg err';}
    else{msg.textContent='✓ Controlla la tua nuova email per confermare il cambio';msg.className='sp-msg ok';document.getElementById('sp-email-new').value='';}
    msg.style.display='block';
  };

  // Controlla sessione esistente — aspetta che Supabase carichi la sessione dal localStorage
  var session=await client.auth.getSession();
  var user=session.data.session?session.data.session.user:null;

  if(!user){
    // Piccola attesa e riprova — Supabase a volte ci mette un attimo
    await new Promise(function(r){setTimeout(r,800);});
    session=await client.auth.getSession();
    user=session.data.session?session.data.session.user:null;
  }

  if(user){
    await fc360Check(user);
  } else {
    showOverlay();
  }

  // OAuth callback
  client.auth.onAuthStateChange(async function(event,session){
    if(event==='SIGNED_IN'&&session){
      var overlay=document.getElementById('fc360-overlay');
      if(overlay)await fc360Check(session.user);
    }
  });

})();
