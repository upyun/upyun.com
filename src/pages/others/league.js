export default function(vm) {
    const leagueApplyModal = modalController('leagueApplyModal');
    leagueApplyModal.toggleModal();
    initLeagueApply(leagueApplyModal, vm);

    function modalController(modalId) {
        // 弹窗节点
        const modal = document.getElementById(modalId);
        const modalHeader = modal.querySelector('.global-modal-header');
        const modalContent = modal.querySelector('.global-modal-content');
        const modalAlert = modal.querySelector('.alert-container');
        // html节点
        const root = document.getElementsByTagName('html')[0];

        return {
            modalHeader,
            modalContent,
            modalAlert,
            toggleModal,
            closeModal
        };

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
            setTimeout(function() {
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
    function initLeagueApply(leagueApplyModal, vm) {
        // 登录、申请表单
        const loginFormNode = document.getElementById('loginForm');
        const applyFormNode = document.getElementById('applyForm');
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
            qq: applyFormNode.querySelector('input[name="qq"]')
        };

        // 登录、申请按钮
        const loginBtn = document.getElementById('login');
        const applyBtn = document.getElementById('apply');
        const cancelBtn = document.getElementById('cancel');

        // 弹窗标题组
        const modalHeaderItemArr = [].slice.call(leagueApplyModal.modalHeader.querySelectorAll('.inline-block .item'));

        // 绑定弹窗内按钮点击事件
        if (loginBtn.addEventListener) {
            loginBtn.addEventListener('click', function() {
                submitLoginForm();
            });
            applyBtn.addEventListener('click', function() {
                submitApplyForm();
            });
            cancelBtn.addEventListener('click', function() {
                leagueApplyModal.closeModal();
            });
        }
        else if (loginBtn.attachEvent) {
            loginBtn.attachEvent('onclick', function() {
                submitLoginForm();
            });
            applyBtn.attachEvent('click', function() {
                submitApplyForm();
            });
            cancelBtn.attachEvent('click', function() {
                leagueApplyModal.closeModal();
            });
        }

        /*
         * 登录
         */
        function submitLoginForm() {
            if (loginFormValidation()) {
                const params = getFormData(loginForm);
                submitForm('https://console.upyun.com/accounts/signin/', params, function(data) {
                    data = JSON.parse(data);
                    if (!data.data) {
                        alertMessage('success', data.msg.messages);
                        setTimeout(function() {
                            loginFormNode.parentElement.className = loginFormNode.parentElement.className.replace(new RegExp('(\\s|^)active(\\s|$)'), '').trim();
                            getNextsibling(loginFormNode.parentElement).className += ' active';
                            fillForm(applyForm, data.user);
                            modalHeaderItemArr[1].className += ' active';
                            leagueApplyModal.modalAlert.innerHTML = '';
                            leagueApplyModal.modalAlert.className = leagueApplyModal.modalAlert.className.replace(new RegExp('(\\s|^)alert-show(\\s|$)'), '').trim();
                        }, 1000);
                    }
                    else {
                        if (data.data.error_description == 'Password not match.') {
                            alertMessage('error', '密码错误');
                        }
                        else if (data.data.message == 'User not found.') {
                            alertMessage('error', '用户不存在');
                        }
                    }
                });
            }
        }

        /*
         * 申请upyun联盟
         */
        function submitApplyForm() {
            if (applyFormValidation()) {
                const params = getFormData(applyForm);
                submitForm('https://console.upyun.com/report/league/', params, function(data) {
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
         * 提交表单
         */
        function submitForm(url, params, cb) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send(params);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    cb(xhr.responseText);
                }
            };
        }

        /*
         * 登录信息验证
         */
        function loginFormValidation() {
            if (!loginForm.username.value.trim()) {
                alertMessage('error', '账号不能为空');
            } else if(!loginForm.password.value.trim()) {
                alertMessage('error', '密码不能为空');
            } else {
                return true;
            }
            return false;
        }

        /*
         * upyun联盟申请验证
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
                        case 'username': regExp = /^[a-z][a-z0-9_-]{4,20}$/; break;
                        case 'website' : regExp = /(https?:\/\/){0,1}([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?/; break;
                        case 'realname': regExp = /^(?!.*([\u4e00-\u9fa5a-zA-Z])\1{2}|[^\u4e00-\u9fa5a-zA-Z]).*$/; break;
                        case 'mobile'  : regExp = /^(1(([3578][0-9])|(47)|[8][01236789]))\d{8}$/; break;
                        case 'email'   : regExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; break;
                        case 'qq'      : regExp = /^[1-9]\d{4,9}$/;break;
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
        function alertMessage(type, message) {
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
    }
}