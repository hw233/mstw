function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d�����ʿ������������˵�������ʵ��.[ǧ��������]��������˯���ˣ����Ǹ�С����ἤŭ���ģ�������ܻ������õ�[����Կ��]���ҿ��԰����һ��ɷǳ�������װ��~�����Ը��ʹ��Ŷ����������ɣ�\r\n\r\n"//3
            //text += "#L1##e#rǧ�������������һ�.#v4000435#\r\n\r\n"//3
            text += "#L2##e#r�뿪�˵�ͼ.#l\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9270045, 1);
        } else if (selection == 2) {
		cm.openNpc(9270045, 2);
        } else if (selection == 3) {
		cm.openNpc(9000018, 63);
        } else if (selection == 4) {
		cm.openNpc(9000018, 64);
        } else if (selection == 5) {
		cm.openNpc(9000018, 65);
        } else if (selection == 6) {
		cm.openNpc(9000018, 66);
        } else if (selection == 7) {
		cm.openNpc(9000018, 67);
        } else if (selection == 8) {
		cm.openNpc(9000018, 68);
        } else if (selection == 9) {
		cm.openNpc(9000018, 69);
        } else if (selection == 10) {
		cm.openNpc(9000018, 610);
	}
    }
}

