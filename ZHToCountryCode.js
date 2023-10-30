function operator(proxies) {
	const ZHFlags = {
    '阿鲁巴': ['🇦🇼', 'ABW'],
    '阿富汗': ['🇦🇫', 'AFG'],
    '安哥拉': ['🇦🇴', 'AGO'],
    '安圭拉': ['🇦🇮', 'AIA'],
    '阿尔巴尼亚': ['🇦🇱', 'ALB'],
    '安道尔': ['🇦🇩', 'AND'],
    '阿联酋': ['🇦🇪', 'ARE'],
    '阿根廷': ['🇦🇷', 'ARG'],
    '亚美尼亚': ['🇦🇲', 'ARM'],
    '美属萨摩亚': ['🇦🇸', 'ASM'],
    '南极洲': ['🇦🇶', 'ATA'],
    '法属南部和南极领地': ['🇹🇫', 'ATF'],
    '安地卡及巴布达': ['🇦🇬', 'ATG'],
    '澳大利亚': ['🇦🇺', 'AUS'],
    '奥地利': ['🇦🇹', 'AUT'],
    '阿塞拜疆': ['🇦🇿', 'AZE'],
    '布隆迪': ['🇧🇮', 'BDI'],
    '比利时': ['🇧🇪', 'BEL'],
    '贝宁': ['🇧🇯', 'BEN'],
    '布吉纳法索': ['🇧🇫', 'BFA'],
    '孟加拉国': ['🇧🇩', 'BGD'],
    '保加利亚': ['🇧🇬', 'BGR'],
    '巴林': ['🇧🇭', 'BHR'],
    '巴哈马': ['🇧🇸', 'BHS'],
    '波黑波斯尼亚和黑塞哥维那': ['🇧🇦', 'BIH'],
    '圣巴泰勒米': ['🇧🇱', 'BLM'],
    '白俄罗斯': ['🇧🇾', 'BLR'],
    '伯利兹': ['🇧🇿', 'BLZ'],
    '百慕大': ['🇧🇲', 'BMU'],
    '玻利维亚': ['🇧🇴', 'BOL'],
    '巴西': ['🇧🇷', 'BRA'],
    '巴巴多斯': ['🇧🇧', 'BRB'],
    '文莱': ['🇧🇳', 'BRN'],
    '不丹': ['🇧🇹', 'BTN'],
    '布韦岛': ['🇧🇻', 'BVT'],
    '博茨瓦纳': ['🇧🇼', 'BWA'],
    '中非': ['🇨🇫', 'CAF'],
    '加拿大': ['🇨🇦', 'CAN'],
    '科科斯（基林）群岛': ['🇨🇨', 'CCK'],
    '瑞士': ['🇨🇭', 'CHE'],
    '智利': ['🇨🇱', 'CHL'],
    '中华人民共和国': ['🇨🇳', 'CHN'],
    '科特迪瓦': ['🇨🇮', 'CIV'],
    '喀麦隆': ['🇨🇲', 'CMR'],
    '刚果民主共和国': ['🇨🇩', 'COD'],
    '刚果共和国': ['🇨🇬', 'COG'],
    '库克群岛': ['🇨🇰', 'COK'],
    '哥伦比亚': ['🇨🇴', 'COL'],
    '科摩罗': ['🇰🇲', 'COM'],
    '佛得角': ['🇨🇻', 'CPV'],
    '哥斯达黎加': ['🇨🇷', 'CRI'],
    '古巴': ['🇨🇺', 'CUB'],
    '库拉索': ['🇨🇼', 'CUW'],
    '圣诞岛': ['🇨🇽', 'CXR'],
    '开曼群岛': ['🇰🇾', 'CYM'],
    '赛普勒斯': ['🇨🇾', 'CYP'],
    '捷克': ['🇨🇿', 'CZE'],
    '德国': ['🇩🇪', 'DEU'],
    '吉布提': ['🇩🇯', 'DJI'],
    '多米尼克': ['🇩🇲', 'DMA'],
    '丹麦': ['🇩🇰', 'DNK'],
    '多米尼加': ['🇩🇴', 'DOM'],
    '阿尔及利亚': ['🇩🇿', 'DZA'],
    '厄瓜多尔': ['🇪🇨', 'ECU'],
    '埃及': ['🇪🇬', 'EGY'],
    '厄立特里亚': ['🇪🇷', 'ERI'],
    '西撒哈拉': ['🇪🇭', 'ESH'],
    '西班牙': ['🇪🇸', 'ESP'],
    '爱沙尼亚': ['🇪🇪', 'EST'],
    '衣索比亚': ['🇪🇹', 'ETH'],
    '芬兰': ['🇫🇮', 'FIN'],
    '斐济': ['🇫🇯', 'FJI'],
    '福克兰群岛': ['🇫🇰', 'FLK'],
    '法国': ['🇫🇷', 'FRA'],
    '法罗群岛': ['🇫🇴', 'FRO'],
    '密克罗尼西亚联邦': ['🇫🇲', 'FSM'],
    '加彭': ['🇬🇦', 'GAB'],
    '英国': ['🇬🇧', 'GBR'],
    '格鲁吉亚': ['🇬🇪', 'GEO'],
    '根西': ['🇬🇬', 'GGY'],
    '加纳': ['🇬🇭', 'GHA'],
    '直布罗陀': ['🇬🇮', 'GIB'],
    '几内亚': ['🇬🇳', 'GIN'],
    '瓜德罗普': ['🇬🇵', 'GLP'],
    '冈比亚': ['🇬🇲', 'GMB'],
    '几内亚比绍': ['🇬🇼', 'GNB'],
    '赤道几内亚': ['🇬🇶', 'GNQ'],
    '希腊': ['🇬🇷', 'GRC'],
    '格瑞那达': ['🇬🇩', 'GRD'],
    '格陵兰': ['🇬🇱', 'GRL'],
    '危地马拉': ['🇬🇹', 'GTM'],
    '法属圭亚那': ['🇬🇫', 'GUF'],
    '关岛': ['🇬🇺', 'GUM'],
    '圭亚那': ['🇬🇾', 'GUY'],
    '香港': ['🇭🇰', 'HKG'],
    '赫德岛和麦克唐纳群岛': ['🇭🇲', 'HMD'],
    '洪都拉斯': ['🇭🇳', 'HND'],
    '克罗地亚': ['🇭🇷', 'HRV'],
    '海地': ['🇭🇹', 'HTI'],
    '匈牙利': ['🇭🇺', 'HUN'],
    '印度尼西亚': ['🇮🇩', 'IDN'],
    '马恩岛': ['🇮🇲', 'IMN'],
    '印度': ['🇮🇳', 'IND'],
    '英属印度洋领地': ['🇮🇴', 'IOT'],
    '爱尔兰': ['🇮🇪', 'IRL'],
    '伊朗': ['🇮🇷', 'IRN'],
    '伊拉克': ['🇮🇶', 'IRQ'],
    '冰岛': ['🇮🇸', 'ISL'],
    '以色列': ['🇮🇱', 'ISR'],
    '义大利': ['🇮🇹', 'ITA'],
    '牙买加': ['🇯🇲', 'JAM'],
    '泽西': ['🇯🇪', 'JEY'],
    '约旦': ['🇯🇴', 'JOR'],
    '日本': ['🇯🇵', 'JPN'],
    '哈萨克斯坦': ['🇰🇿', 'KAZ'],
    '肯尼亚': ['🇰🇪', 'KEN'],
    '吉尔吉斯斯坦': ['🇰🇬', 'KGZ'],
    '柬埔寨': ['🇰🇭', 'KHM'],
    '基里巴斯': ['🇰🇮', 'KIR'],
    '圣基茨和尼维斯': ['🇰🇳', 'KNA'],
    '韩国': ['🇰🇷', 'KOR'],
    '科威特': ['🇰🇼', 'KWT'],
    '老挝': ['🇱🇦', 'LAO'],
    '黎巴嫩': ['🇱🇧', 'LBN'],
    '利比里亚': ['🇱🇷', 'LBR'],
    '利比亚': ['🇱🇾', 'LBY'],
    '圣卢西亚': ['🇱🇨', 'LCA'],
    '列支敦斯登': ['🇱🇮', 'LIE'],
    '斯里兰卡': ['🇱🇰', 'LKA'],
    '赖索托': ['🇱🇸', 'LSO'],
    '立陶宛': ['🇱🇹', 'LTU'],
    '卢森堡': ['🇱🇺', 'LUX'],
    '拉脱维亚': ['🇱🇻', 'LVA'],
    '澳门': ['🇲🇴', 'MAC'],
    '法属圣马丁': ['🇲🇫', 'MAF'],
    '摩洛哥': ['🇲🇦', 'MAR'],
    '摩纳哥': ['🇲🇨', 'MCO'],
    '摩尔多瓦': ['🇲🇩', 'MDA'],
    '马达加斯加': ['🇲🇬', 'MDG'],
    '马尔地夫': ['🇲🇻', 'MDV'],
    '墨西哥': ['🇲🇽', 'MEX'],
    '马绍尔群岛': ['🇲🇭', 'MHL'],
    '北马其顿': ['🇲🇰', 'MKD'],
    '马里': ['🇲🇱', 'MLI'],
    '马尔他': ['🇲🇹', 'MLT'],
    '缅甸': ['🇲🇲', 'MMR'],
    '蒙特内哥罗': ['🇲🇪', 'MNE'],
    '蒙古': ['🇲🇳', 'MNG'],
    '北马里亚纳群岛': ['🇲🇵', 'MNP'],
    '莫桑比克': ['🇲🇿', 'MOZ'],
    '毛里塔尼亚': ['🇲🇷', 'MRT'],
    '蒙特塞拉特': ['🇲🇸', 'MSR'],
    '马提尼克': ['🇲🇶', 'MTQ'],
    '模里西斯': ['🇲🇺', 'MUS'],
    '马拉维': ['🇲🇼', 'MWI'],
    '马来西亚': ['🇲🇾', 'MYS'],
    '马约特': ['🇾🇹', 'MYT'],
    '纳米比亚': ['🇳🇦', 'NAM'],
    '新喀里多尼亚': ['🇳🇨', 'NCL'],
    '尼日尔': ['🇳🇪', 'NER'],
    '诺福克岛': ['🇳🇫', 'NFK'],
    '奈及利亚': ['🇳🇬', 'NGA'],
    '尼加拉瓜': ['🇳🇮', 'NIC'],
    '纽埃': ['🇳🇺', 'NIU'],
    '荷兰': ['🇳🇱', 'NLD'],
    '挪威': ['🇳🇴', 'NOR'],
    '尼泊尔': ['🇳🇵', 'NPL'],
    '瑙鲁': ['🇳🇷', 'NRU'],
    '新西兰': ['🇳🇿', 'NZL'],
    '阿曼': ['🇴🇲', 'OMN'],
    '巴基斯坦': ['🇵🇰', 'PAK'],
    '巴拿马': ['🇵🇦', 'PAN'],
    '皮特凯恩群岛': ['🇵🇳', 'PCN'],
    '秘鲁': ['🇵🇪', 'PER'],
    '菲律宾': ['🇵🇭', 'PHL'],
    '帛琉': ['🇵🇼', 'PLW'],
    '巴布亚新几内亚': ['🇵🇬', 'PNG'],
    '波兰': ['🇵🇱', 'POL'],
    '波多黎各': ['🇵🇷', 'PRI'],
    '朝鲜': ['🇰🇵', 'PRK'],
    '葡萄牙': ['🇵🇹', 'PRT'],
    '巴拉圭': ['🇵🇾', 'PRY'],
    '巴勒斯坦': ['🇵🇸', 'PSE'],
    '巴勒斯坦': ['🇵🇸', 'PSE'],
    '法属玻里尼西亚': ['🇵🇫', 'PYF'],
    '卡塔尔': ['🇶🇦', 'QAT'],
    '留尼汪': ['🇷🇪', 'REU'],
    '罗马尼亚': ['🇷🇴', 'ROU'],
    '俄罗斯': ['🇷🇺', 'RUS'],
    '卢旺达': ['🇷🇼', 'RWA'],
    '沙乌地阿拉伯': ['🇸🇦', 'SAU'],
    '苏丹': ['🇸🇩', 'SDN'],
    '塞内加尔': ['🇸🇳', 'SEN'],
    '新加坡': ['🇸🇬', 'SGP'],
    '南乔治亚和南桑威奇群岛': ['🇬🇸', 'SGS'],
    '圣赫勒拿、阿森松和特里斯坦-达库尼亚': ['🇸🇭', 'SHN'],
    '所罗门群岛': ['🇸🇧', 'SLB'],
    '塞拉利昂': ['🇸🇱', 'SLE'],
    '萨尔瓦多': ['🇸🇻', 'SLV'],
    '圣马力诺': ['🇸🇲', 'SMR'],
    '索马里': ['🇸🇴', 'SOM'],
    '圣皮埃尔和密克隆': ['🇵🇲', 'SPM'],
    '塞尔维亚': ['🇷🇸', 'SRB'],
    '南苏丹': ['🇸🇸', 'SSD'],
    '圣多美和普林西比': ['🇸🇹', 'STP'],
    '苏里南': ['🇸🇷', 'SUR'],
    '斯洛伐克': ['🇸🇰', 'SVK'],
    '斯洛维尼亚': ['🇸🇮', 'SVN'],
    '瑞典': ['🇸🇪', 'SWE'],
    '斯威士兰': ['🇸🇿', 'SWZ'],
    '荷属圣马丁': ['🇸🇽', 'SXM'],
    '塞舌尔': ['🇸🇨', 'SYC'],
    '叙利亚': ['🇸🇾', 'SYR'],
    '特克斯和凯科斯群岛': ['🇹🇨', 'TCA'],
    '乍得': ['🇹🇩', 'TCD'],
    '多哥': ['🇹🇬', 'TGO'],
    '泰国': ['🇹🇭', 'THA'],
    '塔吉克斯坦': ['🇹🇯', 'TJK'],
    '托克劳': ['🇹🇰', 'TKL'],
    '土库曼斯坦': ['🇹🇲', 'TKM'],
    '东帝汶': ['🇹🇱', 'TLS'],
    '汤加': ['🇹🇴', 'TON'],
    '千里达及托巴哥': ['🇹🇹', 'TTO'],
    '突尼西亚': ['🇹🇳', 'TUN'],
    '土耳其': ['🇹🇷', 'TUR'],
    '图瓦卢': ['🇹🇻', 'TUV'],
    '台湾': ['🇹🇼', 'TWN'],
    '坦桑尼亚': ['🇹🇿', 'TZA'],
    '乌干达': ['🇺🇬', 'UGA'],
    '乌克兰': ['🇺🇦', 'UKR'],
    '美国本土外小岛屿': ['🇺🇲', 'UMI'],
    '乌拉圭': ['🇺🇾', 'URY'],
    '美国': ['🇺🇸', 'USA'],
    '乌兹别克斯坦': ['🇺🇿', 'UZB'],
    '梵蒂冈': ['🇻🇦', 'VAT'],
    '圣文森特和格林纳丁斯': ['🇻🇨', 'VCT'],
    '委内瑞拉': ['🇻🇪', 'VEN'],
    '英属维尔京群岛': ['🇻🇬', 'VGB'],
    '美属维尔京群岛': ['🇻🇮', 'VIR'],
    '越南': ['🇻🇳', 'VNM'],
    '瓦努阿图': ['🇻🇺', 'VUT'],
    '瓦利斯和富图纳': ['🇼🇫', 'WLF'],
    '萨摩亚': ['🇼🇸', 'WSM'],
    '叶门': ['🇾🇪', 'YEM'],
    '南非': ['🇿🇦', 'ZAF'],
    '尚比亚': ['🇿🇲', 'ZMB'],
    '辛巴威': ['🇿🇼', 'ZWE']
        //'🇨🇳': ['CN', 'CHN'],
    };
    const counter = {};
        return proxies.map(p => {
		var mt = p.name.match(/[0-9]*(\.)*[0-9]*(?=X)/)?.[0] || "1"
		mt = parseFloat(mt)
		let warn = ''
		if (mt > 1){
		    warn = '  🔸'
		} else if (mt <= 0.5) {
		    warn = '  🔹'
		}
		let name = p.name.match(/[\u4E00-\u9FA5]+/)?.[0];
		if (name in ZHFlags){
			let keywords = ZHFlags[name][1];
      let flag = ZHFlags[name][0];
			p.name = `${flag} ${keywords}•|`;
    }
    if (!counter[p.name]) counter[p.name] = 0;       
    p.name = p.name + " " +(('000'+ ++counter[p.name]).slice(-2)).toString();
		p.name = p.name + warn
		return p;
	});
}