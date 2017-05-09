import Carousel from './carousel';

export default function(vm) {
    // 启动顶部 banner 轮播
    new Carousel('.banner-slides');
    // 启动战略伙伴 Logo 滑动效果
    sliderController('logoSlider');

    const chunyuApplyModal = modalController('chunyuApplyModal');
    const investApplyModal = modalController('investApplyModal');

    // 绑定页面申请弹窗按钮
    [].slice.call(document.querySelectorAll('.apply-modal')).forEach(function (el) {
        bindEvent(el, 'click', function() {
            chunyuApplyModal.toggleModal();
        });
    });
    [].slice.call(document.querySelectorAll('.investment-apply-modal')).forEach(function (el) {
        bindEvent(el, 'click', function() {
            investApplyModal.toggleModal();
        });
    });

    // 初始化春雨申请
    initChunyuApply(chunyuApplyModal);
    // 初始化创投机构申请
    initInvestApply(investApplyModal);

    function modalController(modalId) {
        // 弹窗节点
        const modal = document.getElementById(modalId);
        const modalHeader = modal.querySelector('.global-modal-header');
        const modalContent = modal.querySelector('.global-modal-content');
        const modalAlert = modal.querySelector('.alert-container');
        // html节点
        const root = document.getElementsByTagName('html')[0];

        return {
            getDom,
            modalHeader,
            modalContent,
            modalAlert,
            toggleModal,
            closeModal
        };

        /*
         * 获取Dom
         */
        function getDom() {
            return modal;
        }

        /*
         * 弹出窗口
         */
        function toggleModal() {
            if (!modal.className.match(new RegExp('(\\s|^)global-modal-show(\\s|$)'))) {
                modal.className += ' global-modal-show';
                modal.style.visibility = 'visible';
                if (!root.className.match(new RegExp('(\\s|^)global-modal-open(\\s|$)'))) {
                    root.setAttribute('class', 'global-modal-open');
                }
            }
            // 绑定点击事件
            if (modal.addEventListener) {
                modal.addEventListener('click', clickOnModal, false);
            }
            else if (modal.attachEvent) {
                modal.attachEvent('click', clickOnModal);
            }
        }

        /*
         * 点击事件
         */
        function clickOnModal(event) {
            if (!isModalContent(event)) {
                closeModal();
            }
        }

        /*
         * 关闭弹窗
         */
        function closeModal() {
            if (modal.removeEventListener) {
                modal.removeEventListener('click', clickOnModal, false);
            }
            else if (modal.attachEvent) {
                modal.detachEvent('click', clickOnModal);
            }
            modal.className = modal.className.replace(new RegExp('(\\s|^)global-modal-show(\\s|$)'), '').trim();
            modalAlert.innerHTML = '';
            modalAlert.className = 'alert-container';
            root.removeAttribute('class');
            setTimeout(function () {
                modal.style.visibility = 'hidden';
            }, 300);
        }

        /*
         * 判断点击位置是否为弹窗内容区域
         */
        function isModalContent(event) {
            const target = event.srcElement
                ? event.srcElement
                : event.target;

            function checkParentElement(target) {
                if (target == root) {
                    return false;
                }
                else {
                    return (target.parentElement == modalContent)
                        ? true
                        : checkParentElement(target.parentElement);
                }
            }

            return checkParentElement(target);
        }
    }

    function initChunyuApply(chunyuApplyModal) {
        const modalDom = chunyuApplyModal.getDom();
        // 登录、申请表单
        const loginFormNode = modalDom.querySelector('.loginForm');
        const applyFormNode = modalDom.querySelector('.applyForm');
        const loginForm = {
            username: loginFormNode.querySelector('input[name="username"]'),
            password: loginFormNode.querySelector('input[name="password"]')
        };
        const applyForm = {
            username: applyFormNode.querySelector('input[name="username"]'),
            realname: applyFormNode.querySelector('input[name="realname"]'),
            website: applyFormNode.querySelector('input[name="website"]'),
            mobile: applyFormNode.querySelector('input[name="mobile"]'),
            email: applyFormNode.querySelector('input[name="email"]'),
            reference: applyFormNode.querySelector('input[name="reference"]')
        };
        const agreement = applyFormNode.querySelector('#agreement');

        // 登录、申请按钮
        const loginBtn = modalDom.querySelector('.login-action');
        const applyBtn = modalDom.querySelector('.apply-action');
        const cancelBtn = modalDom.querySelector('.cancel-action');

        // 弹窗标题组
        const modalHeaderItemArr = [].slice.call(chunyuApplyModal.modalHeader.querySelectorAll('.inline-block .item'));

        // 绑定弹窗内按钮点击事件
        bindEvent(loginBtn, 'click', function() {
            submitLoginForm();
        });
        bindEvent(applyBtn, 'click', function() {
            submitApplyForm();
        });
        bindEvent(cancelBtn, 'click', function() {
            chunyuApplyModal.closeModal();
        });

        /*
         * 登录
         */
        function submitLoginForm() {
            if (loginFormValidation()) {
                const params = getFormData(loginForm);
                submitForm('https://console.upyun.com/accounts/signin/', params, function (data) {
                    data = JSON.parse(data);
                    if (data && data.data && data.data.result) {
                        alertMessage(chunyuApplyModal, 'success', data.msg.messages);
                        setTimeout(function () {
                            loginFormNode.parentElement.className = loginFormNode.parentElement.className.replace(new RegExp('(\\s|^)active(\\s|$)'), '').trim();
                            getNextsibling(loginFormNode.parentElement).className += ' active';
                            fillForm(applyForm, data.user);
                            modalHeaderItemArr[1].className += ' active';
                            chunyuApplyModal.modalAlert.innerHTML = '';
                            chunyuApplyModal.modalAlert.className = chunyuApplyModal.modalAlert.className.replace(new RegExp('(\\s|^)alert-show(\\s|$)'), '').trim();
                        }, 1000);
                    }
                    else {
                        if (data.data.error_description == 'Password not match.') {
                            alertMessage(chunyuApplyModal, 'error', '密码错误');
                        }
                        else if (data.data.message == 'User not found.') {
                            alertMessage(chunyuApplyModal, 'error', '用户不存在');
                        }
                    }
                });
            }
        }

        /*
         * 申请春雨计划
         */
        function submitApplyForm() {
            if (applyFormValidation() && agreementValidation()) {
                const params = getFormData(applyForm);
                submitForm('https://console.upyun.com/report/spring-rain/personal', params, function (data) {
                    data = JSON.parse(data);
                    if (data.result === true) {
                        applyFormNode.parentElement.className = applyFormNode.parentElement.className.replace(new RegExp('(\\s|^)active(\\s|$)'), '').trim();
                        getNextsibling(applyFormNode.parentElement).className += ' active';
                        modalHeaderItemArr[2].className += ' active';
                    }
                });
            }
        }

        /*
         * 登录信息验证
         */
        function loginFormValidation() {
            if (!loginForm.username.value.trim()) {
                alertMessage(chunyuApplyModal, 'error', '账号不能为空');
            } else if (!loginForm.password.value.trim()) {
                alertMessage(chunyuApplyModal, 'error', '密码不能为空');
            } else {
                return true;
            }
            return false;
        }

        /*
         * 春雨计划申请验证
         */
        function applyFormValidation() {
            // 清除输入框遗留样式
            agreement.removeAttribute('class');
            for (const key in applyForm) {
                if (applyForm.hasOwnProperty(key)) {
                    applyForm[key].removeAttribute('class');
                }
            }

            for (const key in applyForm) {
                if (applyForm.hasOwnProperty(key)) {
                    let regExp = null;
                    switch (key) {
                        case 'username':
                            regExp = /^[a-z][a-z0-9_-]{4,20}$/;
                            break;
                        case 'website' :
                            regExp = /(https?:\/\/){0,1}([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?/;
                            break;
                        case 'realname':
                            regExp = /^(?!.*([\u4e00-\u9fa5a-zA-Z])\1{2}|[^\u4e00-\u9fa5a-zA-Z]).*$/;
                            break;
                        case 'mobile'  :
                            regExp = /^(1(([3578][0-9])|(47)|[8][01236789]))\d{8}$/;
                            break;
                        case 'email'   :
                            regExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                            break;
                        case 'reference':
                            regExp = /^[a-z][a-z0-9_-]{4,20}$|^$/;
                            break;
                    }

                    if (regExp && !regExp.test(applyForm[key].value.trim())) {
                        applyForm[key].setAttribute('class', 'invalid');
                        return false;
                    }
                }
            }
            return true;
        }

        /*
         * 协议确认
         */
        function agreementValidation() {
            agreement.removeAttribute('class');
            if (agreement.checked) {
                return true;
            }
            else {
                agreement.setAttribute('class', 'invalid');
                return false;
            }
        }
    }

    function initInvestApply(investApplyModal) {
        const modalDom = investApplyModal.getDom();
        // 申请表单
        const applyFormNode = modalDom.querySelector('.applyForm');
        const applyForm = {
            investor_company: applyFormNode.querySelector('input[name="investor_company"]'),
            investor_name: applyFormNode.querySelector('input[name="investor_name"]'),
            investor_phone: applyFormNode.querySelector('input[name="investor_phone"]'),
            investor_email: applyFormNode.querySelector('input[name="investor_email"]')
        };

        // 登录、申请按钮
        const applyBtn = modalDom.querySelector('.apply-action');
        const cancelBtn = modalDom.querySelector('.cancel-action');

        // 弹窗标题组
        const modalHeaderItemArr = [].slice.call(investApplyModal.modalHeader.querySelectorAll('.inline-block .item'));

        // 绑定弹窗内按钮点击事件
        bindEvent(applyBtn, 'click', function() {
            submitApplyForm();
        });
        bindEvent(cancelBtn, 'click', function() {
            investApplyModal.closeModal();
        });

        /*
         * 创投机构申请
         */
        function submitApplyForm() {
            if (applyFormValidation()) {
                const params = getFormData(applyForm);
                submitForm('https://console.upyun.com/report/spring-rain/cooperation', params, function(data) {
                    data = JSON.parse(data);
                    if (data.result === true) {
                        applyFormNode.parentElement.className = applyFormNode.parentElement.className.replace(new RegExp('(\\s|^)active(\\s|$)'), '').trim();
                        getNextsibling(applyFormNode.parentElement).className += ' active';
                        modalHeaderItemArr[1].className += ' active';
                    }
                });
            }
        }

        /*
         * 创投机构申请验证
         */
        function applyFormValidation() {
            //var key;
            // 清除输入框遗留样式
            for (const key in applyForm) {
                if (applyForm.hasOwnProperty(key)) {
                    applyForm[key].removeAttribute('class');
                }
            }

            for (const key in applyForm) {
                if (applyForm.hasOwnProperty(key)) {
                    let regExp = null;
                    switch (key) {
                        case 'investor_company':
                            if (getByteLen(applyForm[key].value.trim()) > 50 || !applyForm[key].value.trim()) {
                                applyForm[key].setAttribute('class', 'invalid');
                                return false;
                            }
                            break;
                        case 'investor_name':
                            if (getByteLen(applyForm[key].value.trim()) > 20 || !applyForm[key].value.trim()) {
                                applyForm[key].setAttribute('class', 'invalid');
                                return false;
                            }
                            break;
                        case 'investor_phone':
                            regExp = /^[0-9]+$/;
                            break;
                        case 'investor_email':
                            regExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                            break;
                    }

                    if (regExp && !regExp.test(applyForm[key].value.trim())) {
                        applyForm[key].setAttribute('class', 'invalid');
                        return false;
                    }
                }
            }
            return true;
        }
    }

    /*
     * 绑定事件
     */
    function bindEvent(dom, eventType, cb) {
        if (dom.addEventListener) {
            dom.addEventListener(eventType, cb);
        }
        else if (dom.attachEvent) {
            dom.attachEvent(eventType, cb);
        }
    }

    /*
     * 提交表单
     */
    function submitForm(url, params, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.withCredentials = true;
        xhr.send(params);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                cb(xhr.responseText);
            }
        };
    }

    /*
     * 获得下一兄弟节点
     */
    function getNextsibling(el) {
        let next = el.nextSibling;
        while (next.nodeType != 1) {
            next = next.nextSibling;
        }
        return next;
    }

    /*
     * 填充表单
     */
    function fillForm(form, data) {
        for (const key in form) {
            if (data.hasOwnProperty(key)) {
                form[key].value = data[key];
            }
        }
    }

    /*
     * 序列化表单数据
     */
    function getFormData(formObj) {
        const formData = new FormData();
        for (const key in formObj) {
            if (formObj.hasOwnProperty(key)) {
                formData.append(key, formObj[key].value);
            }
        }
        return formData;
    }

    /*
     * 提示信息
     */
    function alertMessage(modal, type, message) {
        vm.alertShow = true;
        const alertContent = document.querySelector('.alert');
        alertContent.innerHTML = message;
        if (type === 'success') {
          vm.alertSuccess = true;
          vm.alertError = false;
        } else if (type === 'error') {
          vm.alertError = true;
          vm.alertSuccess = false;
        }
    }

    /*
     * UTF8字符集实际长度计算
     */
    function getByteLen (val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i].match(/[^\x00-\xff]/ig) != null) //全角
                len += 2;
            else
                len += 1;
        }
        return len;
    }

    function sliderController(sliderId) {
        const slider = document.getElementById(sliderId);
        const arrowPrev = slider.querySelector('.arrow .left');
        const arrowNext = slider.querySelector('.arrow .right');
        const sliderBody = slider.querySelector('.sliderContent .inline-block');
        const number = [].slice.call(sliderBody.children).length;
        let position = 0;

        if (document.addEventListener) {
            arrowPrev.addEventListener('click', prev);
            arrowNext.addEventListener('click', next);
        } else if (document.attachEvent) {
            arrowPrev.attachEvent('onclick', prev);
            arrowNext.attachEvent('onclick', next);
        }

        function next() {
            if (position + 10 <= number) {
                position += 5;
            }
            else if (position + 5 < number) {
                position = number - 5;
            }
            else {
                return;
            }
            sliderBody.style.left = '-' + parseInt(position * 136) + 'px';
        }

        function prev() {
            if (position - 5 >= 0) {
                position -= 5;
            }
            else if (position > 0) {
                position = 0;
            }
            else {
                return;
            }
            sliderBody.style.left = '-' + parseInt(position * 136) + 'px';
        }
    }
}
