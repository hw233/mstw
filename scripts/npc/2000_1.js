// mxmxd
// ���а�
function start() {
    if (cm.getChar().getMapId() != 209000015) {
        cm.sendSimple("\t\t\t\t\t#e#d����ð�յ����а�#k#n\r\n\t\t\t#b#L0#�������а�#l\t#L1#�ȼ����а�#l\r\n\t\t\t#L2#�������а�#l\t#L3#������а�#l\r\n\t\t\t#L4#ս�����а�#l");
    } else {
        cm.sendOk("�޷��ڴ˵�ͼ�򿪡�")
    }
}
function action(mode, type, selection) {
    if (selection == 0) { // ��������
        cm.�������а�();
    } else if (selection == 1) {
        cm.showlvl();
    } else if (selection == 2) {
        cm.�������а�();
    } else if (selection == 3) {
        cm.showmeso();
    } else if (selection == 4) {
        cm.ս�������а�();
    }

    cm.dispose();
}