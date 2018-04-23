﻿// mxmxd
// 任务成就奖励

var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";

var arr = [
	[[4001126, 0, "枫叶"], [4000313, 0, "黄金枫叶"]],
	[[4001126, 10, "枫叶"], [4000313, 10, "黄金枫叶"]],
	[[4001126, 20, "枫叶"], [4000313, 20, "黄金枫叶"]],
	[[4001126, 500, "枫叶"], [4000313, 100, "黄金枫叶"]],//30
	[[1032114, 1, "酸甜耳环"], [1032205, 1, "神话耳环"]],
	[[4001126, 500, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 500, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 500, "枫叶"], [1032099, 1, "葡萄耳环"]],
	[[4001126, 500, "枫叶"], [5220040, 5, "飞天猪的蛋"]],
	[[1142002, 1, "任务狂人勋章"], [1142002, 1, "任务狂人勋章"]],//90
	[[4001126, 500, "枫叶"], [2049100, 3, "混沌卷轴60%"]],
	[[2300000, 120, "鱼饵"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 500, "枫叶"], [4031627, 20, "银鱼(3cm)"]],//120
	[[4001126, 500, "枫叶"], [5220040, 5, "飞天猪的蛋"]],
    [[1142177, 1, "冒险岛收藏家勋章"], [1142174, 1, "冒险岛艺术家勋章"]],
	[[4001126, 500, "枫叶"], [2300000, 120, "鱼饵"]],
	[[4001126, 500, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 500, "枫叶"], [4031633, 40, "银鱼(3.6cm)"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
    [[1142477, 1, "冒险岛新人的勋章"], [1142477, 1, "冒险岛新人的勋章"]],//200
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [4031631, 20, "鲑鱼(150cm)"]],
	[[4001126, 800, "枫叶"], [5220040, 8, "飞天猪的蛋"]],
	[[2300000, 240, "鱼饵"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[4001126, 800, "枫叶"], [4031631, 40, "鲑鱼(150cm)"]],//260
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[2300000, 240, "鱼饵"], [4000313, 100, "黄金枫叶"]],//300
	[[4001126, 800, "枫叶"], [1032098, 1, "胡萝卜耳环"]],
	[[4001126, 800, "枫叶"], [5220040, 10, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],//350
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 10, "飞天猪的蛋"]],
	[[2300001, 240, "高级鱼饵"], [4000313, 100, "黄金枫叶"]],//400
	[[4001126, 800, "枫叶"], [4031646, 4, "鲑鱼(183cm)"]],
	[[4001126, 800, "枫叶"], [2300001, 240, "高级鱼饵"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 10, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],//450
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]], //500
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]], //550
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]], //600
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]], //650
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]], //700
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]],
    [[5350000, 2, "高级鱼饵罐头"], [4000313, 100, "黄金枫叶"]],
	[[4001126, 800, "枫叶"], [5220040, 12, "飞天猪的蛋"]],
	[[4001126, 800, "枫叶"], [4000313, 100, "黄金枫叶"]], //750
	[[4001126, 800, "枫叶"], [5350000, 2, "高级鱼饵罐头"]]
];

step = 10;
show1 = false;
show2 = false;

function start() {
    status = -1;
    action(1, 0, 0);
}

function node(n, t) {
    var text = '';
    var value = cm.getPlayer().getQuestPoints();
    var q = cm.getPlayer().getNumQuest();

    if (q >= n) {
        if (value < t) {
            if (!show2) {
                text += "#L" + n + "##r" + 完成红 + "#e“完成" + n + "个任务”#n成就 " + 完成 + " 请点此领取奖励！#l\r\n\r\n";
                show2 = true;
            }
        }
    } else {
        if (!show1) {
            text += "   #b" + 正在进行中蓝 + "#e“完成" + n + "个任务”#n成就 " + 正在进行中 + "#l\r\n      #k再做#b#e" + (n - q) + "#n#k个任务即可达成此成就，加油哦！";
            show1 = true;;
        }
    }
    return text;
}

function 奖励(n) {
	var id;
    var qty;
    var name;

    if (n < 0) {
        cm.dispose();
        return;
    }

	if (n > 750) // 超过预置任务奖励，则只奖励枫叶
	{
		id = 4001126;
		qty = Math.ceil(Math.random() * 1000);
		name = "枫叶";

		if (cm.canHold(id, qty)) {
			var text = "#d#e恭喜你，“完成" + n + "个任务”成就达成！#n#k\r\n";

			var q = cm.getPlayer().getNumQuest();
			var count = Math.floor((q - n) / step);
			if (count > 0) {
				text += "#k你当前共完成 " + q + " 个任务，紧接着还可以领取" + count + "次奖励。\r\n";
			}

			var lv = cm.getPlayer().getLevel();
			var rewardExp = n * lv * 10;
			text += "\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#v" + id + "# #t" + id + "# x " + qty + "\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# +" + rewardExp;
			var wmsg = "[任务成就奖励] 恭喜" + cm.getName() + "已领取“完成" + n + "个任务”的随机奖励！" + name + " x " + qty + "，经验值 +" + rewardExp;

			cm.gainItem(id, qty);
			cm.gainExp(rewardExp);
			cm.getPlayer().设置任务成就奖励进度();
			cm.sendOk(text);
			cm.worldMessage(6, wmsg);
			cm.dispose();
		} else {
			cm.sendOk("请检查是否有足够的背包空间。");
		}
	} else {
		var i = n / step;
		var r = Math.ceil(Math.random() * 2);
		var a = arr[i][r - 1];

		id = a[0];
		qty = a[1];
		name = a[2];
		
		if (cm.canHold(id, qty)) {
			var text = "#d#e恭喜你，“完成" + n + "个任务”成就达成！#n#k\r\n";

			var q = cm.getPlayer().getNumQuest();
			var count = Math.floor((q - n) / step);
			if (count > 0) {
				text += "#k你当前共完成 " + q + " 个任务，紧接着还可以领取" + count + "次奖励。\r\n";
			}

			var lv = cm.getPlayer().getLevel();
			var rewardExp = n * lv * 10;
			text += "\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#v" + id + "# #t" + id + "# x " + qty + "\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# +" + rewardExp;
			var wmsg = "[任务成就奖励] 恭喜" + cm.getName() + "已领取“完成" + n + "个任务”的随机奖励！" + name + " x " + qty + "，经验值 +" + rewardExp;

			cm.记录日志之任务成就奖励(n, name, qty);
			cm.gainItem(id, qty);
			cm.gainExp(rewardExp);
			cm.getPlayer().设置任务成就奖励进度();
			cm.sendOk(text);
			cm.worldMessage(6, wmsg);
			cm.dispose();
		} else {
			cm.sendOk("请检查是否有足够的背包空间。");
		}
	}
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }

        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var text = "\t\t\t\t#e#d  领取任务成就奖励#n\r\n\t\t\t 每做完10个任务，就送1次奖励。#l#n\r\n\r\n";

            var j = 1;
            for (var i = step; i < 10000; i += step) {
                text += node(i, j);
                j++;
            }

            cm.sendSimple(text);
        } else if (status == 1) {
            奖励(selection);

            cm.dispose();
        }
    }
}


