import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

// todo - 여기서 * 은 라우터에 등록하지 않은 모든 경로를 말합니다.
//  (이 파일에서는 읽고 이해가 됬으면 주석 삭제)
FlowRouter.route('*', {
  // todo - 함수 앞에 async 키워드가 있으면, 이 함수는 비동기 함수라는 말입니다.
  //  참고링크 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
  async action() {
    // todo - await 키워드가 실행할 함수 앞에 붙어있으면,
    //  함수 실행이 종료될 때까지 대기한다는 뜻입니다.
    //  참고링크 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
    await import('/imports/client/layouts/layout404.html')
    // todo - 만약 await 키워드를 사용하지 않았다면,
    //  이 함수는 우리가 요청한 템플릿을 가져오는 작업을 수행하지만,
    //  우리는 이것을 기다리지 않고 바로 아래 코드를 실행하게 됩니다.
    //  그러면 아직 클라이언트는 해당 탬플릿을 가지고 있지 않기 때문에 아무것도 랜더링 되지 않습니다.

    // todo - 우리는 비동기 action을 선언하고,
    //  클라이언트가 서버로부터 layout404.html 파일을 가지고 올 때까지 기다리라고 했습니다.
    //  따라서 이제 우리는 layout404.html 템플릿을 클라이언트 획득했으므로 아래와 같이 랜더링을 지시할 수 있습니다.
    this.render('layout404')

    // todo - 라우터에서 번거롭게 하나하나 비동기로 템플릿을 가져오게 하는 이유는 뭘까요?
    //  답은 간단합니다.
    //  100개의 페이지를 가지고 있는 웹 사이트에 방문할 때,
    //  우리는 그 100개의 페이지를 다 받아올 필요가 없고,
    //  방문한 페이지에 대한 정보만 받아오면 되기 때문입니다.
    //  -
    //  일반적으로 404 페이지는 받아올 필요가 없지만,
    //  잘못된 주소로 들어온 일부 유저에게는 이 페이지 정보가 필요합니다.
    //  따라서 이렇게 처리하는 것입니다.

    // todo - 이 부분은 아마 제가 설계하게 되겠지만,
    //  지금은 연습단계이니 시간에 여유가 있다면,
    //  나머지 라우터도 한번 비동기로 바꿔볼까요?
  }
})
