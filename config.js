// ===================================================
// リンクページ設定ファイル
// このファイルを編集してプロフィールやリンクを更新してください
// ===================================================

const CONFIG = {
  // プロフィール設定
  profile: {
    // 表示名
    name: "かいりん",
    
    // プロフィール文
    bio: "I want to play, let's play",
    
    // プロフィール画像のパス（画像ファイルを追加した場合はパスを変更）
    avatar: "profile_400x400.jpg"
  },
  
  // リンク設定
  // 新しいリンクを追加する場合は、配列に新しいオブジェクトを追加してください
  links: [
    {
      // ボタンに表示されるテキスト
      title: "X (Twitter)",
      
      // リンク先URL（自分のプロフィールURLに変更）
      url: "https://x.com/ckrunch",
      
      // アイコンタイプ（x-twitter, note, kakuyomu, instagram, tiktok, default）
      icon: "x-twitter",
      
      // 表示/非表示（falseにすると非表示）
      enabled: true
    },
    {
      title: "note",
      url: "https://note.com/kairin__",
      icon: "note",
      enabled: true
    },
    {
      title: "カクヨム",
      url: "https://kakuyomu.jp/users/Kairin-Ninja",
      icon: "kakuyomu",
      enabled: true
    },
    {
      title: "GitHub",
      url: "https://github.com/kai-rin",
      icon: "github",
      enabled: true
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/yourusername",
      icon: "instagram",
      enabled: false
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@yourusername",
      icon: "tiktok",
      enabled: false
    }
    
    // ===================================================
    // 新しいリンクを追加する例：
    // ,
    // {
    //   title: "YouTube",
    //   url: "https://youtube.com/@yourchannel",
    //   icon: "default",
    //   enabled: true
    // }
    // ===================================================
  ]
};