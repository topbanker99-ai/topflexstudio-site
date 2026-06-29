/* ===== TopFlex Studio — shared scripts ===== */
(function(){
  // header shadow on scroll
  var header = document.getElementById('header');
  if(header){
    var onScroll = function(){ header.classList.toggle('scrolled', window.scrollY > 10); };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // mobile drawer
  var btn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  if(btn && drawer){
    var toggle = function(){
      var open = drawer.classList.toggle('open');
      btn.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    btn.addEventListener('click', toggle);
    drawer.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        drawer.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    reveals.forEach(function(el, i){
      el.style.transitionDelay = (Math.min(i,4)*60) + 'ms';
      io.observe(el);
    });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // contact form -> mailto
  var form = document.getElementById('inquiryForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (document.getElementById('f-name')||{}).value || '';
      var phone = (document.getElementById('f-phone')||{}).value || '';
      var type = (document.getElementById('f-type')||{}).value || '';
      var date = (document.getElementById('f-date')||{}).value || '';
      var msg = (document.getElementById('f-msg')||{}).value || '';
      var subject = '[스튜디오 문의] ' + (name || '고객') + ' - ' + (type || '대관 문의');
      var body =
        '성함: ' + name + '\n' +
        '연락처: ' + phone + '\n' +
        '문의 스튜디오: ' + type + '\n' +
        '희망 일정: ' + date + '\n\n' +
        '문의 내용:\n' + msg + '\n';
      window.location.href = 'mailto:topflex00@naver.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
