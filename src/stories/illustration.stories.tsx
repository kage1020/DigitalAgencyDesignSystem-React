import React from 'react';
import { Meta } from '@storybook/react';
import Table from './_components/Table';
import ReliefSquare from './assets/illustrations/relief_square.svg';
import ReliefRectangle from './assets/illustrations/relief_rectangle.svg';
import EasySquare from './assets/illustrations/easy_square.svg';
import EasyRectangle from './assets/illustrations/easy_rectangle.svg';
import MyNumberRead from './assets/illustrations/my_number_read.svg';
import MyNumberReadBg from './assets/illustrations/my_number_read_bg.svg';
import PassportRead from './assets/illustrations/passport_read.svg';
import PassportReadBg from './assets/illustrations/passport_read_bg.svg';
import MyNumberReadPosition from './assets/illustrations/my_number_read_position.svg';
import MyNumberReadPositionBg from './assets/illustrations/my_number_read_position_bg.svg';
import QRRead from './assets/illustrations/qr_read.svg';
import QRReadBg from './assets/illustrations/qr_read_bg.svg';
import QRShow from './assets/illustrations/qr_show.svg';
import QRShowBg from './assets/illustrations/qr_show_bg.svg';
import MyNumberShow from './assets/illustrations/my_number_show.svg';
import MyNumberShowBg from './assets/illustrations/my_number_show_bg.svg';
import Complete from './assets/illustrations/complete.svg';
import CompleteBg from './assets/illustrations/complete_bg.svg';
import Error from './assets/illustrations/error.svg';
import ErrorBg from './assets/illustrations/error_bg.svg';
import Maintenance from './assets/illustrations/maintenance.svg';
import MaintenanceBg from './assets/illustrations/maintenance_bg.svg';
import Online from './assets/illustrations/online.svg';
import OnlineBg from './assets/illustrations/online_bg.svg';
import Send from './assets/illustrations/send.svg';
import SendBg from './assets/illustrations/send_bg.svg';
import Machine from './assets/illustrations/machine.svg';
import MachineBg from './assets/illustrations/machine_bg.svg';
import ReachDocument from './assets/illustrations/reach_document.svg';
import ReachDocumentBg from './assets/illustrations/reach_document_bg.svg';
import Receive from './assets/illustrations/receive.svg';
import ReceiveBg from './assets/illustrations/receive_bg.svg';
import ID1 from './assets/illustrations/id1.svg';
import ID2 from './assets/illustrations/id2.svg';
import ID3 from './assets/illustrations/id3.svg';
import ID4 from './assets/illustrations/id4.svg';
import ID5 from './assets/illustrations/id5.svg';
import ID6 from './assets/illustrations/id6.svg';
import ID7 from './assets/illustrations/id7.svg';
import ID8 from './assets/illustrations/id8.svg';
import ID9 from './assets/illustrations/id9.svg';
import ID10 from './assets/illustrations/id10.svg';
import ID11 from './assets/illustrations/id11.svg';
import Device1 from './assets/illustrations/device1.svg';
import Device2 from './assets/illustrations/device2.svg';
import Device3 from './assets/illustrations/device3.svg';
import Hand1 from './assets/illustrations/hand1.svg';
import Hand2 from './assets/illustrations/hand2.svg';
import Hand3 from './assets/illustrations/hand3.svg';
import Hand4 from './assets/illustrations/hand4.svg';
import Human1 from './assets/illustrations/human1.svg';
import Human2 from './assets/illustrations/human2.svg';
import Human3 from './assets/illustrations/human3.svg';
import Human4 from './assets/illustrations/human4.svg';
import Human5 from './assets/illustrations/human5.svg';
import Human6 from './assets/illustrations/human6.svg';
import Human7 from './assets/illustrations/human7.svg';
import Human8 from './assets/illustrations/human8.svg';
import Human9 from './assets/illustrations/human9.svg';
import Human10 from './assets/illustrations/human10.svg';
import Human11 from './assets/illustrations/human11.svg';
import Human12 from './assets/illustrations/human12.svg';
import Human13 from './assets/illustrations/human13.svg';
import Human14 from './assets/illustrations/human14.svg';
import Human15 from './assets/illustrations/human15.svg';
import Human16 from './assets/illustrations/human16.svg';
import Human17 from './assets/illustrations/human17.svg';
import Human18 from './assets/illustrations/human18.svg';
import Human19 from './assets/illustrations/human19.svg';
import Human20 from './assets/illustrations/human20.svg';
import Human21 from './assets/illustrations/human21.svg';
import Human22 from './assets/illustrations/human22.svg';
import Human23 from './assets/illustrations/human23.svg';
import Human24 from './assets/illustrations/human24.svg';

const items = [
  {
    content: <img src={ReliefSquare} />,
    title: '「安心」なサービス 正方形',
  },
  {
    content: <img src={ReliefRectangle} />,
    title: '「安心」なサービス 長方形',
  },
  {
    content: <img src={EasySquare} />,
    title: '「簡単」なサービス 正方形',
  },
  {
    content: <img src={EasyRectangle} />,
    title: '「簡単」なサービス 長方形',
  },
  {
    content: <img src={MyNumberRead} />,
    title: 'マイナンバーカードの読み取り',
  },
  {
    content: <img src={MyNumberReadBg} />,
    title: 'マイナンバーカードの読み取り',
  },
  {
    content: <img src={PassportRead} />,
    title: 'パスポートのIC読み取り',
  },
  {
    content: <img src={PassportReadBg} />,
    title: 'パスポートのIC読み取り',
  },
  {
    content: <img src={MyNumberReadPosition} />,
    title: 'マイナンバーカードの読み取り位置',
  },
  {
    content: <img src={MyNumberReadPositionBg} />,
    title: 'マイナンバーカードの読み取り位置',
  },
  {
    content: <img src={QRRead} />,
    title: '２次元コードのカメラ読み取り',
  },
  {
    content: <img src={QRReadBg} />,
    title: '２次元コードのカメラ読み取り',
  },
  {
    content: <img src={QRShow} />,
    title: '２次元コードの提示',
  },
  {
    content: <img src={QRShowBg} />,
    title: '２次元コードの提示',
  },
  {
    content: <img src={MyNumberShow} />,
    title: 'マイナンバーカードの提示',
  },
  {
    content: <img src={MyNumberShowBg} />,
    title: 'マイナンバーカードの提示',
  },
  {
    content: <img src={Complete} />,
    title: '完了',
  },
  {
    content: <img src={CompleteBg} />,
    title: '完了',
  },
  {
    content: <img src={Error} />,
    title: 'エラー',
  },
  {
    content: <img src={ErrorBg} />,
    title: 'エラー',
  },
  {
    content: <img src={Maintenance} />,
    title: 'メンテナンス中',
  },
  {
    content: <img src={MaintenanceBg} />,
    title: 'メンテナンス中',
  },
  {
    content: <img src={Online} />,
    title: 'オンラインで申請',
  },
  {
    content: <img src={OnlineBg} />,
    title: 'オンラインで申請',
  },
  {
    content: <img src={Send} />,
    title: '郵送で申請',
  },
  {
    content: <img src={SendBg} />,
    title: '郵送で申請',
  },
  {
    content: <img src={Machine} />,
    title: '街の写真機から申請',
  },
  {
    content: <img src={MachineBg} />,
    title: '街の写真機から申請',
  },
  {
    content: <img src={ReachDocument} />,
    title: '交付通知書が届く',
  },
  {
    content: <img src={ReachDocumentBg} />,
    title: '交付通知書が届く',
  },
  {
    content: <img src={Receive} />,
    title: '交付場所で受け取る',
  },
  {
    content: <img src={ReceiveBg} />,
    title: '交付場所で受け取る',
  },
  {
    content: <img src={ID1} />,
    title: 'ID1',
  },
  {
    content: <img src={ID2} />,
    title: 'ID2',
  },
  {
    content: <img src={ID3} />,
    title: 'ID3',
  },
  {
    content: <img src={ID4} />,
    title: 'ID4',
  },
  {
    content: <img src={ID5} />,
    title: 'ID5',
  },
  {
    content: <img src={ID6} />,
    title: 'ID6',
  },
  {
    content: <img src={ID7} />,
    title: 'ID7',
  },
  {
    content: <img src={ID8} />,
    title: 'ID8',
  },
  {
    content: <img src={ID9} />,
    title: 'ID9',
  },
  {
    content: <img src={ID10} />,
    title: 'ID10',
  },
  {
    content: <img src={ID11} />,
    title: 'ID11',
  },
  {
    content: <img src={Device1} />,
    title: 'Device1',
  },
  {
    content: <img src={Device2} />,
    title: 'Device2',
  },
  {
    content: <img src={Device3} />,
    title: 'Device3',
  },
  {
    content: <img src={Hand1} />,
    title: 'Hand1',
  },
  {
    content: <img src={Hand2} />,
    title: 'Hand2',
  },
  {
    content: <img src={Hand3} />,
    title: 'Hand3',
  },
  {
    content: <img src={Hand4} />,
    title: 'Hand4',
  },
  {
    content: <img src={Human1} />,
    title: 'Human1',
  },
  {
    content: <img src={Human2} />,
    title: 'Human2',
  },
  {
    content: <img src={Human3} />,
    title: 'Human3',
  },
  {
    content: <img src={Human4} />,
    title: 'Human4',
  },
  {
    content: <img src={Human5} />,
    title: 'Human5',
  },
  {
    content: <img src={Human6} />,
    title: 'Human6',
  },
  {
    content: <img src={Human7} />,
    title: 'Human7',
  },
  {
    content: <img src={Human8} />,
    title: 'Human8',
  },
  {
    content: <img src={Human9} />,
    title: 'Human9',
  },
  {
    content: <img src={Human10} />,
    title: 'Human10',
  },
  {
    content: <img src={Human11} />,
    title: 'Human11',
  },
  {
    content: <img src={Human12} />,
    title: 'Human12',
  },
  {
    content: <img src={Human13} />,
    title: 'Human13',
  },
  {
    content: <img src={Human14} />,
    title: 'Human14',
  },
  {
    content: <img src={Human15} />,
    title: 'Human15',
  },
  {
    content: <img src={Human16} />,
    title: 'Human16',
  },
  {
    content: <img src={Human17} />,
    title: 'Human17',
  },
  {
    content: <img src={Human18} />,
    title: 'Human18',
  },
  {
    content: <img src={Human19} />,
    title: 'Human19',
  },
  {
    content: <img src={Human20} />,
    title: 'Human20',
  },
  {
    content: <img src={Human21} />,
    title: 'Human21',
  },
  {
    content: <img src={Human22} />,
    title: 'Human22',
  },
  {
    content: <img src={Human23} />,
    title: 'Human23',
  },
  {
    content: <img src={Human24} />,
    title: 'Human24',
  },
];

const meta: Meta = {
  title: 'Components/Illustrations',
  component: () => <Table items={items} />,
  tags: ['autodocs'],
};

export default meta;

export const Preview = () => <Table items={items} />;
