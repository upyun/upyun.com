import $ from 'jquery'

export default function () {
  // 检测浏览器是否支持webp图片格式
  function check_webp_feature(feature) {
    const kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    const testWebp = new Image();
    testWebp.onload = function () {
      const result = (testWebp.width > 0) && (testWebp.height > 0);
      handleCheck(result);
    };
    testWebp.onerror = function () {
      handleCheck(false);
    };
    testWebp.src = "data:image/webp;base64," + kTestImages[feature];

    function handleCheck(result) {
      if (!result) {
        setTimeout(() => {
          alert('当前浏览器不支持 WebP 格式图片，请使用 Chrome 浏览器！');
        }, 3000);
      } else {
        console.log('congratulations, your browser is supporting webp!');
      }
    }
  }
  check_webp_feature('lossy');

  const rootPath = 'https://p.upyun.com/demo/webp';
  $(document).ready(function(){
    let gifSize;
    let gifToWebpSize;
    let pngSize;
    let pngToWebpSize;
    let jpgSize;
    let jpgToWebpSize;
    let animatedgifSize;
    let animatedgifToWebpSize;
    let gifSaved;
    let jpgSaved;
    let pngSaved;
    let animatedgifSaved;
    let currentIndex = 0;

    // 图片加载节点
    const imgGif = $('#img-gif')[0];
    const imgGifToWebp = $('#img-gif-to-webp')[0];
    const imgPng = $('#img-png')[0];
    const imgPngToWebp = $('#img-png-to-webp')[0];
    const imgJpg = $('#img-jpg')[0];
    const imgJpgToWebp = $('#img-jpg-to-webp')[0];
    const imgAnimatedGif = $('#img-animated-gif')[0];
    const imgAnimatedGifToWebp = $('#img-to-animated-webp')[0];

    // 图片大小节点
    const imgGifSize = $('.gif > .text .picture-size-value');
    const imgGifToWebpSize = $('.gif-to-webp > .text .picture-size-value');
    const imgPngSize = $('.png > .text .picture-size-value');
    const imgPngToWebpSize = $('.png-to-webp > .text .picture-size-value');
    const imgJpgSize = $('.jpg > .text .picture-size-value');
    const imgJpgToWebpSize = $('.jpg-to-webp > .text .picture-size-value');
    const imgAnimatedGifSize = $('.animated-gif > .text .picture-size-value');
    const imgAnimatedGifToWebpSize = $('.to-animated-webp > .text .picture-size-value');

    // 图片尺寸节点
    const imgGifRatio = $('.gif > .text .picture-ratio-value');
    const imgGifToWebpRatio = $('.gif-to-webp > .text .picture-ratio-value');
    const imgPngRatio = $('.png > .text .picture-ratio-value');
    const imgPngToWebpRatio = $('.png-to-webp > .text .picture-ratio-value');
    const imgJpgRatio = $('.jpg > .text .picture-ratio-value');
    const imgJpgToWebpRatio = $('.jpg-to-webp > .text .picture-ratio-value');
    const imgAnimatedGifRatio = $('.animated-gif > .text .picture-ratio-value');
    const imgAnimatedGifToWebpRatio = $('.to-animated-webp > .text .picture-ratio-value');

    // 首次加载
    replaceImages(currentIndex);

    // 点击换一批图片
    $(".change").click(function(){
      if (currentIndex === 9) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }
      resetData();
      replaceImages(currentIndex);
    });

    // 重置数据
    function resetData() {
      gifSize = 0;
      gifToWebpSize = 0;
      pngSize = 0;
      pngToWebpSize = 0;
      jpgSize = 0;
      jpgToWebpSize = 0;
      animatedgifSize = 0;
      animatedgifToWebpSize = 0;
      gifSaved = 0;
      jpgSaved = 0;
      pngSaved = 0;
      animatedgifSaved = 0;
      $('.animated-gif > .picture .tag').text('动态 GIF');
      $('.to-animated-webp > .picture .tag').text('动态 WebP');
      // 隐藏压缩百分比信息节点（待数据获取成功后再显示）
      $('.gif-to-webp > .text .save-size').hide();
      $('.png-to-webp > .text .save-size').hide();
      $('.jpg-to-webp > .text .save-size').hide();
      $('.to-animated-webp > .text .save-size').hide();
    }

    // 显示下一批图片
    function replaceImages(currentIndex) {
      // 更新图片
      $(imgGif).attr('src', `${rootPath}/gif/${currentIndex}.gif`);
      $(imgGifToWebp).attr('src', `${rootPath}/webp/gif-${currentIndex}.webp`);
      $(imgPng).attr('src', `${rootPath}/png/${currentIndex}.png`);
      $(imgPngToWebp).attr('src', `${rootPath}/webp/png-${currentIndex}.webp`);
      $(imgJpg).attr('src', `${rootPath}/jpg/${currentIndex}.jpg`);
      $(imgJpgToWebp).attr('src', `${rootPath}/webp/jpg-${currentIndex}.webp`);
      $(imgAnimatedGif).attr('src', `${rootPath}/animated-gif/${currentIndex}.gif`);
      $(imgAnimatedGifToWebp).attr('src', `${rootPath}/webp/animated-gif-${currentIndex}.webp`);
      // 更新图片大小信息
      getImgSize(`${rootPath}/gif/${currentIndex}.gif`, 'gif');
      getImgSize(`${rootPath}/webp/gif-${currentIndex}.webp`, 'gif-to-webp');
      getImgSize(`${rootPath}/png/${currentIndex}.png`, 'png');
      getImgSize(`${rootPath}/webp/png-${currentIndex}.webp`, 'png-to-webp');
      getImgSize(`${rootPath}/jpg/${currentIndex}.jpg`, 'jpg');
      getImgSize(`${rootPath}/webp/jpg-${currentIndex}.webp`, 'jpg-to-webp');
      getImgSize(`${rootPath}/animated-gif/${currentIndex}.gif`, 'animated-gif');
      getImgSize(`${rootPath}/webp/animated-gif-${currentIndex}.webp`, 'to-animated-webp');
      // 更新图片尺寸信息
      getImgRatio('img-gif');
      getImgRatio('img-gif-to-webp');
      getImgRatio('img-png');
      getImgRatio('img-png-to-webp');
      getImgRatio('img-jpg');
      getImgRatio('img-jpg-to-webp');
      getImgRatio('img-animated-gif');
      getImgRatio('img-to-animated-webp');
      // 更新图片压缩百分比信息
      setTimeout(function(){
        calculateSavedSize();
      }, 1000);
    }

    // 获取图片大小并更新节点信息
    function getImgSize(url, type) {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', `${url}?_=${new Date().getTime()}`, true);
      xhr.send();
      xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 ) {
          if ( xhr.status == 200 ) {
            // 获取图片大小并转换为K/M
            const imgSize = xhr.getResponseHeader('Content-Length');
            let transferedImgSize = imgSize / 1024;

            if (transferedImgSize > 1024) {
              transferedImgSize = (transferedImgSize / 1024).toFixed(1) + 'M';
            } else {
              transferedImgSize = transferedImgSize.toFixed(1) + 'K';
            }
            // 保存图片大小数据并更新节点信息
            if (type === 'animated-gif') {
              animatedgifSize = imgSize;
              imgAnimatedGifSize.text(transferedImgSize);
            } else if (type === 'to-animated-webp') {
              animatedgifToWebpSize = imgSize;
              imgAnimatedGifToWebpSize.text(transferedImgSize);
            } else if (type === 'gif') {
              gifSize = imgSize;
              imgGifSize.text(transferedImgSize);
            } else if (type === 'gif-to-webp') {
              gifToWebpSize = imgSize;
              imgGifToWebpSize.text(transferedImgSize);
            } else if (type === 'png') {
              pngSize = imgSize;
              imgPngSize.text(transferedImgSize);
            } else if (type === 'png-to-webp') {
              pngToWebpSize = imgSize;
              imgPngToWebpSize.text(transferedImgSize);
            } else if (type === 'jpg') {
              jpgSize = imgSize;
              imgJpgSize.text(transferedImgSize);
            } else if (type === 'jpg-to-webp') {
              jpgToWebpSize = imgSize;
              imgJpgToWebpSize.text(transferedImgSize);
            }
          } else {
              console.log('图片信息获取失败');
              if (type === 'animated-gif') {
                imgAnimatedGifSize.text('获取中');
              } else if (type === 'to-animated-webp') {
                imgAnimatedGifToWebpSize.text('获取中');
              } else if (type === 'gif') {
                imgGifSize.text('获取中');
              } else if (type === 'gif-to-webp') {
                imgGifToWebpSize.text('获取中');
              } else if (type === 'png') {
                imgPngSize.text('获取中');
              } else if (type === 'png-to-webp') {
                imgPngToWebpSize.text('获取中');
              } else if (type === 'jpg') {
                imgJpgSize.text('获取中');
              } else if (type === 'jpg-to-webp') {
                imgJpgToWebpSize.text('获取中');
              }
          }
        }
      }
    }

    // 计算压缩百分比并更新节点信息
    function calculateSavedSize() {
      gifSaved = ((gifSize - gifToWebpSize) / gifSize * 100).toFixed(0);
      pngSaved = ((pngSize - pngToWebpSize) / pngSize * 100).toFixed(0);
      jpgSaved = ((jpgSize - jpgToWebpSize) / jpgSize * 100).toFixed(0);
      animatedgifSaved = ((animatedgifSize - animatedgifToWebpSize) / animatedgifSize * 100).toFixed(0);
      if (gifSaved > 0) {
        $('.gif-to-webp > .text .save-size').show();
        $('.gif-to-webp > .text .save-size').text(`${gifSaved}%`);
      }
      if (pngSaved > 0) {
        $('.png-to-webp > .text .save-size').show();
        $('.png-to-webp > .text .save-size').text(`${pngSaved}%`);
      }
      if (jpgSaved > 0) {
        $('.jpg-to-webp > .text .save-size').show();
        $('.jpg-to-webp > .text .save-size').text(`${jpgSaved}%`);
      }
      if (animatedgifSaved > 0) {
        $('.to-animated-webp > .text .save-size').show();
        $('.to-animated-webp > .text .save-size').text(`${animatedgifSaved}%`);
      }
    }

    // 获取图片尺寸并更新节点信息
    function getImgRatio(imgId) {
      document.getElementById(imgId).onload = function() {
        const imgWidth = this.naturalWidth;
        const imgHeight = this.naturalHeight;
        if (imgId === 'img-gif') {
          imgGifRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-gif-to-webp') {
          imgGifToWebpRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-png') {
          imgPngRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-png-to-webp') {
          imgPngToWebpRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-jpg') {
          imgJpgRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-jpg-to-webp') {
          imgJpgToWebpRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-animated-gif') {
          imgAnimatedGifRatio.text(`${imgWidth} x ${imgHeight}`);
        } else if (imgId === 'img-to-animated-webp') {
          imgAnimatedGifToWebpRatio.text(`${imgWidth} x ${imgHeight}`);
        }
      }
    }

    // 上传图片
    $("#button-upload").click(function(){
      // 重置数据
      animatedgifSize = 0;
      animatedgifToWebpSize = 0;
      animatedgifSaved = 0;
      $('.to-animated-webp > .text .save-size').hide();

      $('#select-file').off('change'); // 撤销之前绑定的change事件

      $('#select-file').click();
      $('#select-file').change(function() {
        let sourceUrl;
        let webpUrl;
        const fileName = $('#select-file')[0].files[0].name;
        const fileSize = $('#select-file')[0].files[0].size;
        const fileSuffix = (fileName.split('.')[1]).toLowerCase();
        if (fileSuffix !== 'jpg' && fileSuffix !== 'jpeg' && fileSuffix !== 'gif' && fileSuffix !== 'png') {
          $('#select-file')[0].value = ''; // 清除input文件输入框
          alert('请选择 JPEG/GIF/PNG/动态 GIF 格式图片！');
          return false;
        } else if (fileSize > 8388608) {
          $('#select-file')[0].value = ''; // 清除input文件输入框
          alert('请选择小于 8MB 的图片进行体验！');
          return false;
        } else {
          $('#cover-gif').show();
          $('#cover-webp').show();
          if (fileSuffix === 'gif') {
            $('.animated-gif > .picture .tag').text('GIF');
            $('.to-animated-webp > .picture .tag').text('WebP');
          } else if (fileSuffix === 'png') {
            $('.animated-gif > .picture .tag').text('PNG');
            $('.to-animated-webp > .picture .tag').text('WebP');
          } else {
            $('.animated-gif > .picture .tag').text('JPG');
            $('.to-animated-webp > .picture .tag').text('WebP');
          }
          $.post('https://console.upyun.com/demo/webp/sign',
            {
              file_name: fileName,
            },
            function(data){
              const parseData = JSON.parse(data);
              sourceUrl = parseData.source_url;
              webpUrl = parseData.webp_url;
              const uploadData = new FormData($('#uploadForm')[0]);
              uploadData.append('policy', parseData.policy);
              uploadData.append('authorization', parseData.authorization);
              $.ajax({
                url: 'https://v0.api.upyun.com/uprocess',
                type: 'POST',
                data: uploadData,
                cache: false,
                processData: false,
                contentType: false,
              }).done(function(data, textStatus) {
                // 清除input文件输入框
                $('#select-file')[0].value = '';
                // 获取图片帧数，如为动态gif图片则更新标签
                if (JSON.parse(data)['image-type'] === 'GIF' && JSON.parse(data)['image-frames'] > 1) {
                  $('.animated-gif > .picture .tag').text('动态 GIF');
                  $('.to-animated-webp > .picture .tag').text('动态 WebP');
                }
                // 图片上传成功加载原始图片
                $(imgAnimatedGif).attr('src', sourceUrl);
                document.getElementById('img-animated-gif').onload = function() {
                  const imgWidth = this.naturalWidth;
                  const imgHeight = this.naturalHeight;
                  imgAnimatedGifRatio.text(`${imgWidth} x ${imgHeight}`);
                  $('#cover-gif').hide();
                  getImgSize(sourceUrl, 'animated-gif');
                }
                // 隔5秒后加载转换后的Webp格式图片
                setTimeout(function(){
                  $(imgAnimatedGifToWebp).attr('src', webpUrl);
                  document.getElementById('img-to-animated-webp').onload = function() {
                    const imgWidth = this.naturalWidth;
                    const imgHeight = this.naturalHeight;
                    imgAnimatedGifToWebpRatio.text(`${imgWidth} x ${imgHeight}`);
                    $('#cover-webp').hide();
                    getImgSize(webpUrl, 'to-animated-webp');
                    setTimeout(function(){
                      animatedgifSaved = ((animatedgifSize - animatedgifToWebpSize) / animatedgifSize * 100).toFixed(0);
                      if (animatedgifSaved > 0) {
                        $('.to-animated-webp > .text .save-size').show();
                        $('.to-animated-webp > .text .save-size').text(`${animatedgifSaved}%`);
                      }
                    }, 1000);
                  }
                  document.getElementById('img-to-animated-webp').onerror = function() {
                    $('#cover-webp').hide();
                  }
                }, 5000);
              }).fail(function(res, textStatus, error) {
                $('#select-file')[0].value = ''; // 清除input文件输入框
                try {
                  const body = JSON.parse(res.responseText);
                  alert('error: ' + body.message);
                } catch(e) {
                  console.error(e);
                }
              });
            }
          );
        }
      });
    });
  });
};
