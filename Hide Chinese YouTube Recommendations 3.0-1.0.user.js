// ==UserScript==
// @name         Hide Chinese YouTube Recommendations 3.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide videos with Chinese characters on YouTube
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const kanjiSet = new Set("日一国会人年大十二本中長出三同時政事自行社見月分議後前民生連五発間対上部東者党地合市業内相方四定今回新場金員九入選立開手米力学問高代明実円関決子動京全目表戦経通外最言氏現理調体化田当八六約主題下首意法不来作性的要用制治度務強気小七成期公持野協取都和統以機平総加山思家話世受区領多県続進正安設保改数記院女初北午指権心界支第産結百派点教報済書府活原先共得解名交資予川向際査勝面委告軍文反元重近千考判認画海参売利組知案道信策集在件団別物側任引使求所次水半品昨論計死官増係感特情投示変打男基私各始島直両朝革価式確村提運終挙果西勢減台広容必応演電歳住争談能無再位置企真流格有疑口過局少放税検藤町常校料沢裁状工建語球営空職証土与急止送援供可役構木割聞身費付施切由説転食比難防補車優夫研収断井何南石足違消境神番規術護展態導鮮備宅害配副算視条幹独警宮究育席輸訪楽起万着乗店述残想線率病農州武声質念待試族象銀域助労例衛然早張映限親額監環験追審商葉義伝働形景落欧担好退準賞訴辺造英被株頭技低毎医復仕去姿味負閣韓渡失移差衆個門写評課末守若脳極種美岡影命含福蔵量望松非撃佐核観察整段横融型白深字答夜製票況音申様財港識注呼渉達贈智握照宙酒俊銭薄堂渋群銃悲秒操携奥診詰託晴撮誕侵括掛謝双孝刺到駆寝透津壁稲仮暗裂敏鳥純是飯排裕堅訳盗芝綱吸典賀扱顧弘看訟戒祉誉歓勉奏勧騒翌陽閥甲快縄片郷敬揺免既薦隣悩華泉御範隠冬徳皮哲漁杉里釈己荒貯硬妥威豪熊歯滞微隆埋症暫忠倉昼茶彦肝柱喚沿妙唱祭袋阿索誠忘襲雪筆吹訓懇浴俳童宝柄驚麻封胸娘砂李塩浩誤剤瀬趣陥斎貫仙慰賢序弟旬腕兼聖旨即洗柳舎偽較覇兆床畑慣詳毛緑尊抵脅祝礼窓柔茂犠旗距雅飾網竜詩昔繁殿濃翼牛茨潟敵魅嫌魚斉液貧敷擁衣肩圏零酸兄罰怒滅泳礎腐祖幼脚菱荷潮梅泊尽杯僕桜滑孤黄煕炎賠句寿鋼頑甘臣鎖彩摩浅励掃雲掘縦輝蓄軸巡疲稼瞬捨皆砲軟噴沈誇祥牲秩帝宏唆鳴阻泰賄撲凍堀腹菊絞乳煙縁唯膨矢耐恋塾漏紅慶猛芳懲郊剣腰炭踊幌彰棋丁冊恒眠揚冒之勇曽械倫陳憶怖犬菜耳潜珍梨仁克岳概拘墓黙須偏雰卵遇湖諮狭喫卓干頂虫刷亀糧梶湯箱簿炉牧殊殖艦溶輩穴奇慢鶴謀暖昌拍朗丈鉱寛覆胞泣涙隔浄匹没暇肺孫貞靖鑑飼陰銘鋭随烈尋渕稿枝丹啓也丘棟壌漫玄粘悟舗妊塗熟軒旭恩毒騰往豆遂晩狂叫栃岐陛緯培衰艇屈径淡抽披廷錦准暑拝磯奨妹浸剰胆氷繊駒乾虚棒寒孜霊帳悔諭祈惨虐翻墜沼据肥徐糖搭姉髪忙盾脈滝拾軌俵妨盧粉擦鯨漢糸荘諾雷漂懐勘綿栽才拐笠駄添汗冠斜銅鏡聡浪亜覧詐壇勲魔酬紫湿曙紋卸奮趙欄逸涯拓眼瓶獄筑尚阜彫咲穏顕巧矛垣召欺釣缶萩粧隻葛脂粛栗愚蒸嘉遭架篠鬼庶肌稚靴菅滋幻煮姫誓耕把践呈疎仰鈍恥剛疾征砕謡嫁謙后嘆俣菌鎌巣泥頻琴班淵棚潔酷宰廊寂辰隅偶霞伏灯柏辛磨碁俗漠邪晶辻麦墨鎮洞履劣那殴娠奉憂朴亭姓淳荻筒鼻嶋怪粒詞鳩柴偉酔惜穫佳潤悼乏胃該赴桑桂髄虎盆晋穂壮堤飢傍疫累痴搬畳晃癒桐寸郭机尿凶吐宴鷹賓虜膚陶鐘憾畿猪紘磁弥昆粗訂芽尻庄傘敦騎寧濯循忍磐猫怠如寮祐鵬塔沸鉛珠凝苗獣哀跳灰匠菓垂蛇澄縫僧幾眺唐亘呉凡憩鄭芦龍媛溝恭刈睡錯伯帽笹穀柿陵霧魂枯弊釧妃舶餓腎窮掌麗綾臭釜悦刃縛暦宜盲粋辱毅轄猿弦嶌稔窒炊洪摂飽函冗涼桃狩舟貝朱渦紳枢碑鍛刀鼓裸鴨符猶塊旋弓幣膜扇脇腸憎槽鍋慈皿肯樋楊伐駿漬燥糾亮墳坪畜紺慌娯吾椿舌羅坊峡俸厘峰圭醸蓮弔乙倶汁尼遍堺衡呆薫瓦猟羊窪款閲雀偵喝敢畠胎酵憤豚遮扉硫赦挫挟窃泡瑞又慨紡恨肪扶戯伍忌濁奔斗蘭蒲迅肖鉢朽殻享秦茅藩沙輔曇媒鶏禅嘱胴粕冨迭挿湘嵐椎灘堰獅姜絹陪剖譜郁悠淑帆暁鷲傑楠笛芥其玲奴誰錠拳翔遷拙侍尺峠篤肇渇榎俺劉幡諏叔雌亨堪叙酢吟逓痕嶺袖甚喬崔妖琵琶聯蘇闇崇漆岬癖愉寅捉礁乃洲屯樽樺槙薩姻巌淀麹賭擬塀唇睦閑胡幽峻曹哨詠炒屏卑侮鋳抹尉槻隷禍蝶酪茎汎頃帥梁逝滴汽謎琢箕匿爪芭逗苫鍵襟蛍楢蕉兜寡琉痢庸朋坑姑烏藍僑賊搾奄臼畔遼唄孔橘漱呂桧拷宋嬢苑巽杜渓翁藝廉牙謹瞳湧欣窯褒醜魏篇升此峯殉煩巴禎枕劾菩堕丼租檜稜牟桟榊錫荏惧倭婿慕廟銚斐罷矯某囚魁薮虹鴻泌於赳漸逢凧鵜庵膳蚊葵厄藻萬禄孟鴈狼嫡呪斬尖翫嶽尭怨卿串已嚇巳凸暢腫粟燕韻綴埴霜餅魯硝牡箸勅芹杏迦棺儒鳳馨斑蔭焉慧祇摯愁鷺楼彬袴匡眉苅讃尹欽薪湛堆狐褐鴎瀋挺賜嵯雁佃綜繕狛壷橿栓翠鮎芯蜜播榛凹艶帖伺桶惣股匂鞍蔦玩萱梯雫絆錬湊蜂隼舵渚珂煥衷逐斥稀癌峨嘘旛篭芙詔皐雛娼篆鮫椅惟牌宕喧佑蒋樟耀黛叱櫛渥挨憧濡槍宵襄妄惇蛋脩笘宍甫酌蚕壕嬉囃蒼餌簗峙粥舘銕鄒蜷暉捧頒只肢箏檀鵠凱彗謄諌樫噂脊牝梓洛醍砦丑笏蕨噺抒嗣隈叶凄汐絢叩嫉朔蔡膝鍾仇伽夷恣瞑畝抄杭寓麺戴爽裾黎惰坐鍼蛮塙冴旺葦礒咸萌饗歪冥偲壱瑠韮漕杵薔膠允眞蒙蕃呑侯碓茗麓瀕蒔鯉竪弧稽瘤澤溥遥蹴或訃矩厦冤剥舜侠贅杖蓋畏喉汪猷瑛搜曼附彪撚噛卯桝撫喋但溢闊藏浙彭淘剃揃綺徘巷竿蟹芋袁舩拭茜凌頬厨犀簑皓甦洸毬檄姚蛭婆叢椙轟贋洒貰儲緋貼諜鯛蓼甕喘怜溜邑鉾倣碧燈諦煎瓜緻哺槌啄穣嗜偕罵酉蹄頚胚牢糞悌吊楕鮭乞倹嗅詫鱒蔑轍醤惚廣藁柚舛縞謳杞鱗繭釘弛狸壬硯蝦".split(""));

    const isLikelyChineseButNotJapanese = (text) => {
        const chineseOnly = (text.match(/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/g) || []).length;
        const hiragana = (text.match(/[\u3040-\u309F]/g) || []).length;
        const katakana = (text.match(/[\u30A0-\u30FF]/g) || []).length;
        const total = text.length;
        let KanjiCount = 0;
        for (const ch of text) {
            if (kanjiSet.has(ch)) {
                KanjiCount++;
            };
        };
        const ratio = (chineseOnly - KanjiCount) / total;
        if (hiragana + katakana > 1) return false;
        return chineseOnly >= 2 && ratio > 0.1;
    };

    function getVideoTitleElements() {
        const selectors = [
            'a#video-title',
            'yt-formatted-string#video-title',
            'a.yt-simple-endpoint.style-scope.ytd-grid-video-renderer',
            'a.yt-lockup-metadata-view-model-wiz__title',
            'h3.yt-lockup-title > a',
            'a[href^="/watch"]:not([aria-hidden="true"])',
        ];

        const elements = [];
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (el.textContent && el.textContent.trim().length >= 5) {
                    elements.push(el);
                }
            });
        });

        return elements;
    }


    const removeChineseVideosByTitle = () => {
        const titles = getVideoTitleElements();

        titles.forEach(titleElement => {
            const text = titleElement.textContent.trim();
            if (!isLikelyChineseButNotJapanese(text)) return;

            const renderer = titleElement.closest('ytd-rich-item-renderer, ytd-video-renderer, div#content, ytd-grid-video-renderer');
            if (renderer && !renderer.hasAttribute('data-checked')) {
                console.log("[REMOVE]", text);
                renderer.setAttribute('data-checked', 'true');
                renderer.style.display = 'none';
            }
        });
    };

    const observer = new MutationObserver(() => removeChineseVideosByTitle());
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("DOMContentLoaded", removeChineseVideosByTitle);
    setInterval(removeChineseVideosByTitle, 2000);
})();