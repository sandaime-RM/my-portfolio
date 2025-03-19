---
id: "currency"
title: "仮想通貨RunRun 取引アプリ"
description: "多摩美大生のRunRunによる作品「仮装通貨RUNRUN」のためにWebアプリを開発"
image: "/currency-thumbnail.png"
date: "2024-11-01"
---

## ❓どんな作品・アプリ？
「仮想通貨RUNRUN」は、RunRunさんの身体活動データを基に指数が算出され、閲覧者は仮想通貨としてのレートを見たり取引をしたりできる作品です。  
私はアプリエンジニアとして、このWebアプリやバックエンドの制作でこの作品に携わりました。

## 🔧 主な機能
- **仮想通貨の指数を算出**: FitbitのAPIを用いて、心拍数や睡眠記録を取得し、仮装通貨の指数に反映
- **取引**: FXのように、日本円と仮装通貨RUNRUNとの間の取引をする機能。手数料や取引可能時間など、現実に近い形で再現。
- **ランキング**: ユーザーごとの総資産をランキング化し、アプリ上に表示

## 🛠️ 技術スタック
- **フロントエンド**: React
- **バックエンド**: Firebase Firestore, Firebase Cloud Functions, Fitbit API

[RUNRUN TRADER](https://runrun-fit.web.app)