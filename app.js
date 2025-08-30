// アイコンはicons.jsファイルから読み込まれます
// ICONSグローバル変数はicons.jsで定義されています

function renderProfile(profile) {
    const profileElement = document.querySelector('.profile');
    if (!profileElement) return;
    
    profileElement.innerHTML = `
        <img src="${profile.avatar}" alt="プロフィール画像" class="profile-image">
        <h1 class="profile-name">${profile.name}</h1>
        <p class="profile-bio">${profile.bio}</p>
    `;
}

function renderLinks(links) {
    const linksElement = document.querySelector('.links');
    if (!linksElement) return;
    
    linksElement.innerHTML = '';
    
    links.forEach(link => {
        if (!link.enabled) return;
        
        const iconHtml = ICONS[link.icon] || ICONS.default;
        
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-button';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        linkElement.innerHTML = `
            ${iconHtml}
            <span>${link.title}</span>
        `;
        
        linksElement.appendChild(linkElement);
    });
}

function generateQRCode() {
    // QRコード生成（デスクトップとタブレットのみ）
    if (window.innerWidth > 768 && typeof QRCode !== 'undefined') {
        const qrContainer = document.getElementById('qrcode');
        if (qrContainer) {
            // 既存のQRコードをクリア
            qrContainer.innerHTML = '';
            
            // QRコード生成
            new QRCode(qrContainer, {
                text: 'https://kai-rin.github.io/link-in-bio/',
                width: 128,
                height: 128,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        }
    }
}

function init() {
    // 必要な設定が読み込まれているか確認
    if (typeof CONFIG === 'undefined') {
        document.body.innerHTML = `
            <div class="container">
                <div style="color: white; text-align: center; padding: 40px;">
                    <h1>設定エラー</h1>
                    <p>config.jsファイルが見つかりません。</p>
                    <p>設定ファイルを確認してください。</p>
                </div>
            </div>
        `;
        return;
    }
    
    if (typeof ICONS === 'undefined') {
        document.body.innerHTML = `
            <div class="container">
                <div style="color: white; text-align: center; padding: 40px;">
                    <h1>設定エラー</h1>
                    <p>icons.jsファイルが見つかりません。</p>
                    <p>アイコン設定ファイルを確認してください。</p>
                </div>
            </div>
        `;
        return;
    }
    
    // プロフィールをレンダリング
    if (CONFIG.profile) {
        renderProfile(CONFIG.profile);
    }
    
    // リンクをレンダリング
    if (CONFIG.links) {
        renderLinks(CONFIG.links);
    }
    
    // QRコード生成
    generateQRCode();
}

// DOMが読み込まれたら初期化
document.addEventListener('DOMContentLoaded', init);

// ウィンドウリサイズ時にQRコードの表示/非表示を切り替え
window.addEventListener('resize', function() {
    const qrContainer = document.querySelector('.qr-container');
    if (qrContainer) {
        if (window.innerWidth <= 768) {
            qrContainer.style.display = 'none';
        } else {
            qrContainer.style.display = 'block';
            // QRコードが生成されていない場合は再生成
            const qrcode = document.getElementById('qrcode');
            if (qrcode && !qrcode.querySelector('canvas') && !qrcode.querySelector('img')) {
                generateQRCode();
            }
        }
    }
});