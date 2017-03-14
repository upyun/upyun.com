<style lang="sass" src="./price_instruction.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet", heroHeight="80", heroOverflow="visible")
  div(slot="page")
    .price-instruction
      .wrapper
        h1 又拍云计费说明
        .caculate
          h2 1 计费方式
          p.bill-method
            | 又拍云的各项产品服务，均支持按需计费。即根据用户帐号每日实际使用量进行计费结算。
          p.bill-method
            | 用户只需要向账户进行充值加款。每日定时计费后，可看到系统生成的帐单，了解每日消费记录。
          p.big-customer
            b &lowast;
            | 大客户可通过商务洽谈，基于服务使用状况，协定更灵活的计费模式、更优惠的服务价格。
        .price
          h2 2 产品价格
          h4 2.1 CDN 计费
          p CDN 服务，按流出流量和动态 CDN 请求次数两个项目分别计费。
          table(cellspacing='0')
            thead
              tr
                th.col-one 计费项
                th 计费说明
            tbody
              tr
                td 流出流量
                td 每日流出流量 × 流量单价
              tr
                td 动态 CDN 请求数
                td
                  span 每日动态 CDN 请求次数 × 请求单价
                  span 注：动态请求是指回用户源站并且缓存时间小于 60 秒或者指定不缓存的请求。
          p
            b 又拍云 CDN 地区分类说明
            ul
              li
                span 国内：中国大陆地区，22 个省，5 个自治区，4 个直辖市（注：台湾省、香港、澳门除外）。
              li
                span 亚太：除中国大陆外的亚太国家及地区。
              li
                span 欧美：其他海外地区。
          p 注：当您的绑定域名备案过期或失效时，域名所在服务将会解析到海外节点以保证正常访问，期间产生的访问按实际海外线路计费。
          h4 2.2 HTTPS 计费
          p HTTPS 服务，按使用 HTTPS 流出请求次数计费。
          table(cellspacing='0')
            thead
              tr
                th.col-one 计费项
                th 计费说明
            tbody
              tr
                td HTTPS 流出请求数
                td
                  span 每日 HTTPS 流出请求数 × 请求单价
                  span 注：此项只在开启 HTTPS 服务时计费，包含 PUT/DELETE/GET 等请求项。
          h4 2.3 存储计费
          p 存储服务，按每日实际使用的存储空间大小计费，并且按每日流出流量使用，实行 1:1 的每日存储空间使用量免费。
          table(cellspacing='0')
            thead
              tr
                th.col-one 计费项
                th 计费说明
            tbody
              tr
                td 日存储“小于等于”日流量
                td 当天存储免费
              tr
                td 日存储“大于”日流量
                td 仅收取对应差值存储费用，即（日存储量 - 日流量）× 存储单价
          h4 2.4 音视频处理计费
          p 音视频处理服务，按不同项目分别计费。
          table.audio-video(cellspacing='0')
            thead
              tr
                th.col-one 计费项
                th 计费说明
            tbody
              tr
                td
                  ul
                    li 视频转码
                    li HLS 切片
                    li 视频水印
                    li 视频剪辑
                td
                  ul
                    li 基于对应服务功能，结合输出视频“清晰度”独立计费
                    li 单个处理服务收费 =（对应清晰度）视频输出时长 × 处理单价
              tr
                td
                  ul
                    li 音频转码（实时）
                    li 音频转码（异步）
                    li 音频剪辑（异步）
                td 每日单个处理服务的音频输出时长 × 处理单价（实时/异步）
              tr
                td 视频截图张数
                td 每日视频截图张数 × 处理单价
              tr
                td 音频拼接次数
                td 每日音频拼接次数 × 处理单价
              tr
                td 视频拼接次数
                td 每日视频拼接次数 × 处理单价
              tr
                td 请求元信息次数
                td 每日请求元信息次数 × 处理单价
          p
            b 日结算示例：
          ul.daily-bill-info
            li
              b 比如当日共进行 6 项音视频处理任务，结算方式如下所示：
            li 处理 1（视频转码、高清）：60 分钟 × 0.017 元/分钟 = 1.02 元
            li 处理 2（HLS 切片、高清）：60 分钟 × 0.017 元/分钟 = 1.02 元
            li 处理 3（视频水印、流畅）：60 分钟 × 0.0044 元/分钟 = 0.264 元
            li 处理 4（视频剪辑、高清）：60 分钟 × 0.017 元/分钟 = 1.02 元
            li 处理 5（视频截图）：1000 张 × 0.10 元/千张 = 0.10 元
            li 处理 6（音频拼接）：1000 次 × 0.10 元/千次 = 0.10 元
            li 日结算合计 = 1.02 + 1.02 + 0.264 + 1.02 + 0.10 +0.10 = 3.524 元
          h4 2.5 直播加速计费
          p 直播加速服务，按上行和下行两个项目分别计费。
          table(cellspacing='0')
            thead
              tr
                th.col-one 计费项
                th 计费说明
            tbody
              tr
                td 上行流量
                td
                  span 每日推流流量 × 流量单价
                  span 注：视频直播端推送的上传流量计费
              tr
                td 下行流量
                td
                  span 每日拉流流量 × 流量单价
                  span 注：观众播放端产生的访问流量计费
          h4 2.6 服务账单
          table(cellspacing='0')
            thead
              tr
                th.col-one 账单类型
                th 说明
            tbody
              tr
                td 日账单
                td
                  ul
                    li
                      span 标准计费的账单计费周期为一自然日（24 小时）。
                    li
                      span 出账通常为当前计费周期结束（自然日）次日 5 点后生成，具体以系统出账时间为准。
                    li
                      span 账单生成后会自动从用户账户余额中扣除费用以结算。
              tr
                td 月账单
                td
                  ul
                    li
                      span 账单计费周期为一个自然月。
                    li
                      span 通常每月 1 日 5 点生成上月账单，具体以系统出账时间为准。
                    li
                      span 月账单为自然月每日账单数据的汇总。
        .account
          h2 3 账户管理
          h4 3.1 现金充值
          p 充值加款说明
          table(cellspacing='0')
            thead
              tr
                th.col-one 充值方式
                th 说明
            tbody
              tr
                td 支付宝支付
                td 通过又拍云官网支付宝接口进行充值，系统自动完成。
              tr
                td 线下银行打款
                td
                  span 通过线下银行汇款至又拍云指定银行，人工协助完成。
                  span 注：转帐或汇款完成后，请联系又拍云工作人员完成充值加款。
          h4 3.2 代金券
          p 代金券类型
          table(cellspacing='0')
            thead
              tr
                th.col-one 类型
                th 说明
            tbody
              tr
                td 纸质代金券
                td 凭纸质代金券上的激活码，在代金券管理页面激活即可。
              tr
                td 电子代金券
                td 系统直接发放或通过邮件推送的代金券，领取后自动激活。
          .coupon
            p
              b 代金券状态
            ul
              li
                span 使用中：已激活，金额未用完且未过有效期的代金券。
              li
                span 已用完：金额用完的代金券。
              li
                span 已过期：金额未用完，但已过有效期的代金券。
            p
              b 代金券使用规范
            ul
              li
                span 代金券可用于抵扣又拍云各项服务费用，不可抵扣账户已欠费用，不可兑换流量包。
              li
                span 代金券激活后，必须在有效期内使用，过期无效，未用完的余额不退。
              li
                span 不同活动领取的代金券可叠加使用，同一个活动的只能使用一张。
              li
                span 系统优先使用最近到期的代金券。当代金券余额不足时，系统将从现金余额中补扣。
          h4 3.3 资源池
          table(cellspacing='0')
            thead
              tr
                th.col-one 类型
                th 说明
            tbody
              tr
                td 流量包
                td
                  span 通过各项活动购买到的一定额度、一定使用期限的流量计费资源。
                  span 用于 CDN 流量费用抵扣。
          .flowbag
            p
              b 流量包状态
            ul
              li
                span 使用中：已购买到账的流量包。
              li
                span 已用完：已使用完的流量包。
              li
                span 已过期：流量未用完，但已过有效期的流量包。
            p
              b 流量包使用规范
            ul
              li
                span 流量包一旦购买成功，不支持退款。
              li
                span 实际扣费流量超过流量包额度时，将按量计费，从现金余额中扣减。
              li
                span 流量包须在有效期内使用，过期无效，未用完的流量不退。
              li
                span 未有特别说明的流量包均只限于 CDN 国内流量抵扣。
        .arrears
          h2 4 欠费处理
          h4 4.1 余额管理
          ul
            li
              span 又拍云基于用户账户余额状况，进行人性化提醒，请确保帐号下手机号及邮箱已验证（且正常使用）。
            li
              span 当账户余额不足日常服务扣款时，用户将收到又拍云的余额不足提醒通知（短信）。
            li
              span 当账户余额不足 0 元，即为欠费，用户将收到又拍云的欠费通知 （邮件或短信）。
          h4 4.2 帐号欠费使用处理规范
          ul
            li
              span 欠费超过 6 天（欠费的第 6 天），又拍云将停用帐号，各项服务暂停。
            li
              span 欠费停用期间，用户仍然可以登录又拍云，充值补还欠款，服务自动恢复。
            li
              span 欠费停用期间，因保存数据而产生的存储费用仍将计入账单。
            li
              span 自停用之日起，所有服务资源和配置信息最多保留 6 个月。
        p.final-right 又拍云保留最终解释权。
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection.blue
    }
  },
  head: {
    title: { inner: '又拍云计费说明' }
  },
  components: { layout }
}
</script>
