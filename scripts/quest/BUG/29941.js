/*
	����: ����γ�����
	����: ��Ϊ�˷����ߵ�һԱ�� ��Ȼ����αװ��������γ̣�������һ��������ɫ֮������ش�ׯ��
	���: 1142242 - �ر�γ�����
*/
var status = -1;

function start(mode, type, selection) {
    if (qm.canHold(1142242, 1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.gainItem(1142242, 1);
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.canHold(1142242, 1) && qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 1000) | 0) == 3) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.gainItem(1142242, 1);
    }
    qm.dispose();
}