/**
 * ÇOMÜ GANO Hesaplayıcı - Ana JavaScript Modülü
 * Gelişmiş hesaplama algoritması, UI etkileşimleri ve i18n desteği.
 */

const i18n = {
    tr: {
        title: "ÇOMÜ GANO Hesaplayıcı",
        subtitle: "Lisans Dönemi Ortalama Hesaplama Aracı",
        calcType: "Kredi Türü",
        aktsTitle: "AKTS",
        yerelTitle: "Yerel Kredi",
        localWarn: "ÇOMÜ'de güncel olarak AKTS sistemi kullanılmaktadır.",
        gradeMode: "Not Giriş Türü",
        modeLetter: "Harf Notu",
        modeExam: 'Vize ve Final Notu <span class="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded ml-2 uppercase font-bold">Detaylı</span>',
        targetSem: "Hesaplanacak Dönem",
        hasExist: "Mevcut bir GANO'm var (Bu seçenek seçilmezse 1. yarıyıldan itibaren başlar.)",
        existGano: "Mevcut GANO",
        existCredit: "Toplam AKTS",
        startSem: "Hesaplamaya Başlanılacak Dönem",
        btnStart: "Hesaplamaya Başla",
        semInfo: ". Yarıyıl Bilgileri",
        courseCount: "Bu dönem alınan ders sayısı:",
        placeholderCount: "Sayı giriniz",
        btnAddBatch: "Ekle",
        repeatCountLbl: "Tekrar alınan ders sayısını giriniz:",
        btnApply: "Uygula",
        colName: "Ders Adı",
        colGrade: "Harf Notu",
        prevGradeLbl: "Geçmiş Not",
        selectMsg: "Seçiniz",
        btnBack: "Önceki Yarıyıl",
        btnCalcSem: "Yarıyılı Hesapla ve İlerle",
        btnCalcBut: "Bütünlemeleri Hesapla ve İlerle",
        btnFinish: "Sonuçları Gör ve Bitir",
        btnFinishBut: "Bütünlemeleri Hesapla ve Bitir",
        footerText: "Bu araç öğrenciler tarafından öğrenciler için hazırlanmış olup, resmi bağlayıcılığı yoktur. Resmi veriler için Çanakkale Onsekiz Mart Üniversitesinin öğrenci bilgi sistemini kontrol ediniz.",
        btnInfo: "Ek Bilgi",
        btnCreateTranscript: "Transkript Önizlemesi Oluştur",
        btnPrintReal: "Transkript Önizlemesi Yazdır",
        btnRecalculate: "Yeniden Hesapla",
        btnBackFromTranscript: "Geri Dön",
        transcriptTitle: "Düzenlenebilir Transkript Önizlemesi",
        transcriptWarn: "Transkript yazdırmak için 1. yarıyıldan başlamanız önerilir.",
        btnClear: "Sayfayı Sıfırla",
        btnClose: "Kapat",
        btnSave: "Kaydet",
        btnCancel: "İptal",
        modalTitleResult: "Sonuç",
        summarySem: "Bu Yarıyıl Özeti",
        summaryTotal: "YANO'ya Etki Eden",
        summaryYano: "YANO (Yarıyıl Ort.):",
        summaryGen: "Genel Durum",
        summaryGenTotal: "Genel Toplam",
        summaryGano: "GANO (Genel Ort.):",
        btnNextSem: "Sonraki Yarıyıla Geç",
        btnHome: "Ana Sayfaya Dön",
        errMissing: "Eksik Bilgi",
        errMissingMsg: "Lütfen mevcut GANO ve AKTS bilgilerini eksiksiz girin.",
        errGano: "Hata",
        errGanoMsg: "GANO 0.00 ile 4.00 arasında olmalıdır.",
        errCreditMsg: "Tamamlanan miktar 0'dan büyük olmalıdır.",
        errSemMsg: "Hesaplanacak son yarıyıl, ilk yarıyıldan daha küçük olamaz.",
        errRowMsg: "Lütfen AKTS ve gerekli not alanlarını doldurun.",
        errRowCreditMsg: "Kredi/AKTS değeri sıfırdan büyük olmalıdır.",
        errZeroCreditMsg: "Toplam dönem miktarı sıfır olamaz.",
        errInvalidExam: "Sınav notları 0 ile 100 arasında olmalıdır.",
        errSumMsg: "Etkinliklerin ve finalin ağırlık toplamı %100 olmalıdır.",
        errPrevGradeMsg: "Lütfen tekrar edilen dersler için geçmiş dönem harf notunu seçiniz.",
        infoTitle: "Ek Bilgi ve Yönetmelik",
        infoBody: `
            <div class="space-y-8">
                <div class="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-extrabold text-comuBlue dark:text-blue-400">Değerlendirme Esasları</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Çanakkale Onsekiz Mart Üniversitesi Lisans Eğitim Öğretim Yönetmeliğine göre hazırlanmıştır.</p>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                    <h4 class="font-bold text-comuBlue dark:text-blue-400 mb-4 text-lg flex items-center gap-2">
                        <span>📚</span> MADDE 26 – Başarı Notu
                    </h4>
                    <p class="text-sm mb-5 leading-relaxed text-gray-700 dark:text-gray-300">100 puan üzerinden verilen dönem içi eğitim öğretim etkinliklerinden (ara sınav/sınavlar, uygulama, staj, seminer, proje, ödev, vb.) alınan notların ortalamasının %40'ı ve yarıyıl sonu veya bütünleme sınav notunun %60'ı alınıp toplanarak öğrencinin başarı notu hesaplanır. Bu not tabloya göre Harf Notu'na çevrilir.</p>

                    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-green-600 dark:text-green-400 block text-lg mb-1">AA</span> 4.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-green-500 dark:text-green-400 block text-lg mb-1">BA</span> 3.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-blue-500 dark:text-blue-400 block text-lg mb-1">BB</span> 3.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-blue-400 block text-lg mb-1">CB</span> 2.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-yellow-500 dark:text-yellow-400 block text-lg mb-1">CC</span> 2.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-orange-500 dark:text-orange-400 block text-lg mb-1">DC</span> 1.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-orange-600 dark:text-orange-500 block text-lg mb-1">DD</span> 1.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-red-500 dark:text-red-400 block text-lg mb-1">FD</span> 0.5</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 text-center rounded-lg shadow-sm border border-red-200 dark:border-red-800 text-sm"><span class="font-bold block text-lg mb-1">FF</span> 0.0</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 text-center rounded-lg shadow-sm border border-red-200 dark:border-red-800 text-sm"><span class="font-bold block text-lg mb-1">DZ</span> 0.0</div>
                    </div>

                    <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>Tekrar edilen derslerde alınan <strong>son başarı notu</strong> geçerlidir.</li>
                        <li>Bir dersten başarılı sayılabilmek için o dersin yarıyıl sonu (final) veya bütünleme sınavından <strong>en az 50 puan</strong> almak zorunludur. 50 puanın altında alan öğrencilerin başarı notu ortalamasına bakılmaksızın 40'ın altındaysa FF, 40 ve üzerindeyse FD verilir.</li>
                        <li><strong>(DC) veya (DD)</strong> notlarından birini alan öğrencinin GNO'su (Genel Not Ortalaması) 2.00 ve üzeri ise dersi <em>koşullu başarmış</em> sayılır. GNO 2.00'ın altındaysa <em>koşullu başarısız</em> sayılır.</li>
                    </ul>
                </div>

                <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                    <h4 class="font-bold text-emerald-800 dark:text-emerald-400 mb-3 text-lg flex items-center gap-2">
                        <span>📊</span> MADDE 28 – Ortalama Hesapları
                    </h4>
                    <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        <strong>DNO (YANO - Yarıyıl Not Ortalaması):</strong> Bir yarıyılda alınan derslerin her birinin AKTS kredisi ile bu derslerden alınan notların katsayısının çarpımları toplamının, aynı derslerin AKTS kredi toplamına bölünmesi ile elde edilir.<br><br>
                        <strong>GNO (GANO - Genel Not Ortalaması):</strong> Tüm yarıyıllarda alınan derslerin her birinin AKTS kredisi ile bu derslerden alınan notların katsayısının çarpımları toplamının tüm derslerin AKTS kredisi toplamına bölünmesi ile elde edilir.
                    </p>
                </div>

                <div class="text-sm text-center text-gray-500 dark:text-gray-400 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    Resmi kaynak: <a href="https://ogrenciisleri.comu.edu.tr/egitim-ogretim-ve-sinav-yonetm.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold transition">ÇOMÜ Öğrenci İşleri Yönetmelik Sayfası</a>
                </div>
            </div>
        `,
        semPrefix: "",
        semSuffix: ". Yarıyıl",
        successMsg: "Hedeflenen yarıyıla ulaştınız!",
        yano: "YANO",
        gano: "GANO",
        akts: "AKTS",
        butunlemeFillMsg: "Başarısız olunan dersler için bütünleme notlarını giriniz veya boş bırakınız.",
        settingsTitle: "Ders Değerlendirme Ayarları",
        termActs: "Dönem İçi Etkinlikler",
        addAct: "+ Yeni Etkinlik Ekle",
        finalWeight: "Yarıyıl Sonu Sınavı (Final) Ağırlığı (%)",
        finalWarn: "Yarıyıl sonu sınavlarının ağırlığı %60'tır.",
        btnSetting: "Ayar",
        lblRaw: "Ort."
    },
    en: {
        title: "COMU GPA Calculator",
        subtitle: "Undergraduate GPA Calculation Tool",
        calcType: "Credit Type",
        aktsTitle: "ECTS",
        yerelTitle: "Local Credit",
        localWarn: "ECTS system is currently used in COMU.",
        gradeMode: "Grade Entry Mode",
        modeLetter: "Letter Grade",
        modeExam: 'Exams <span class="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded ml-2 uppercase font-bold">Detailed</span>',
        targetSem: "Calculation Semester",
        hasExist: "I have an existing CGPA (If not selected, calculation starts from Semester 1).",
        existGano: "Current CGPA",
        existCredit: "Total ECTS",
        startSem: "Starting Semester to Calculate",
        btnStart: "Start Calculation",
        semInfo: ". Semester Info",
        courseCount: "Courses taken this semester:",
        placeholderCount: "Enter number",
        btnAddBatch: "Add",
        repeatCountLbl: "Enter the number of repeated courses:",
        btnApply: "Apply",
        colName: "Course Name",
        colGrade: "Letter Grade",
        prevGradeLbl: "Previous Grade",
        selectMsg: "Select",
        btnBack: "Previous Semester",
        btnCalcSem: "Calculate & Proceed",
        btnCalcBut: "Calculate Make-ups & Proceed",
        btnFinish: "View Results & Finish",
        btnFinishBut: "Calculate Make-ups & Finish",
        footerText: "This tool has been prepared by students for students, and is not officially binding. For official records, please check the student information system of Çanakkale Onsekiz Mart University.",
        btnInfo: "Additional Info",
        btnCreateTranscript: "Create Transcript Preview",
        btnPrintReal: "Print Transcript Preview",
        btnRecalculate: "Recalculate",
        btnBackFromTranscript: "Go Back",
        transcriptTitle: "Editable Transcript Preview",
        transcriptWarn: "It is recommended to start from the 1st semester to print a transcript.",
        btnClear: "Reset Page",
        btnClose: "Close",
        btnSave: "Save",
        btnCancel: "Cancel",
        modalTitleResult: "Result",
        summarySem: "Semester Summary",
        summaryTotal: "Semester ECTS",
        summaryYano: "GPA (Semester Avg):",
        summaryGen: "Overall Status",
        summaryGenTotal: "Overall Total",
        summaryGano: "CGPA (Overall Avg):",
        btnNextSem: "Proceed to Next Semester",
        btnHome: "Return to Home",
        errMissing: "Missing Info",
        errMissingMsg: "Please enter your existing CGPA and ECTS completely.",
        errGano: "Error",
        errGanoMsg: "CGPA must be between 0.00 and 4.00.",
        errCreditMsg: "Completed credits must be greater than 0.",
        errSemMsg: "Target semester cannot be less than starting semester.",
        errRowMsg: "Please fill in ECTS and required grade fields.",
        errRowCreditMsg: "Credit/ECTS must be greater than zero.",
        errZeroCreditMsg: "Total semester credit cannot be zero.",
        errInvalidExam: "Exam grades must be between 0 and 100.",
        errSumMsg: "The sum of activities and final weight must be 100%.",
        errPrevGradeMsg: "Please select the previous letter grade for repeated courses.",
        infoTitle: "Additional Info & Regulation",
        infoBody: `
            <div class="space-y-8">
                <div class="text-center pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-extrabold text-comuBlue dark:text-blue-400">Evaluation Principles</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Prepared according to COMU Undergraduate Education and Examination Regulations.</p>
                </div>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                    <h4 class="font-bold text-comuBlue dark:text-blue-400 mb-4 text-lg flex items-center gap-2">
                        <span>📚</span> ARTICLE 26 – Success Grade
                    </h4>
                    <p class="text-sm mb-5 leading-relaxed text-gray-700 dark:text-gray-300">The student's success grade is calculated by taking 40% of the average of the in-term activity grades and 60% of the final or make-up exam grade. This grade is converted to a Letter Grade according to the table.</p>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-green-600 dark:text-green-400 block text-lg mb-1">AA</span> 4.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-green-500 dark:text-green-400 block text-lg mb-1">BA</span> 3.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-blue-500 dark:text-blue-400 block text-lg mb-1">BB</span> 3.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-blue-400 block text-lg mb-1">CB</span> 2.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-yellow-500 dark:text-yellow-400 block text-lg mb-1">CC</span> 2.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-orange-500 dark:text-orange-400 block text-lg mb-1">DC</span> 1.5</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-orange-600 dark:text-orange-500 block text-lg mb-1">DD</span> 1.0</div>
                        <div class="bg-white dark:bg-gray-800 p-3 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm"><span class="font-bold text-red-500 dark:text-red-400 block text-lg mb-1">FD</span> 0.5</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 text-center rounded-lg shadow-sm border border-red-200 dark:border-red-800 text-sm"><span class="font-bold block text-lg mb-1">FF</span> 0.0</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 text-center rounded-lg shadow-sm border border-red-200 dark:border-red-800 text-sm"><span class="font-bold block text-lg mb-1">DZ</span> 0.0</div>
                    </div>
                    <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>In repeated courses, the <strong>last success grade</strong> obtained is valid.</li>
                        <li>To be considered successful in a course, it is mandatory to get <strong>at least 50 points</strong> from the final or make-up exam. If the exam score is below 50, the grade is FF if the average is below 40, and FD if 40 and above.</li>
                        <li>A student with a <strong>(DC) or (DD)</strong> grade is considered <em>conditionally successful</em> if their CGPA is 2.00 or above. If below 2.00, it is considered <em>conditionally failed</em>.</li>
                    </ul>
                </div>
                <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                    <h4 class="font-bold text-emerald-800 dark:text-emerald-400 mb-3 text-lg flex items-center gap-2">
                        <span>📊</span> ARTICLE 28 – Average Calculations
                    </h4>
                    <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        <strong>GPA (Semester Average):</strong> Obtained by dividing the sum of the products of the ECTS credits of each course taken in a semester and the coefficient of the grades by the total ECTS credits of those courses.<br><br>
                        <strong>CGPA (Overall Average):</strong> Obtained by dividing the sum of the products of the ECTS credits of each course taken in all semesters and the coefficient of the grades by the total ECTS credits of all courses.
                    </p>
                </div>
                <div class="text-sm text-center text-gray-500 dark:text-gray-400 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    Official source: <a href="https://ogrenciisleri.comu.edu.tr/egitim-ogretim-ve-sinav-yonetm.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold transition">COMU Student Affairs Regulation</a>
                </div>
            </div>
        `,
        semPrefix: "Semester ",
        semSuffix: "",
        successMsg: "Target semester reached!",
        yano: "GPA",
        gano: "CGPA",
        akts: "ECTS",
        butunlemeFillMsg: "Please enter make-up exam grades for failed courses or leave empty.",
        settingsTitle: "Course Assessment Settings",
        termActs: "Term Activities",
        addAct: "+ Add New Activity",
        finalWeight: "Final Exam Weight (%)",
        finalWarn: "The weight of the final exams is 60%.",
        btnSetting: "Set",
        lblRaw: "Avg."
    }
};

const GRADES = {
    "AA": 4.0, "BA": 3.5, "BB": 3.0, "CB": 2.5, "CC": 2.0,
    "DC": 1.5, "DD": 1.0, "FD": 0.5, "FF": 0.0, "DZ": 0.0
};

let lang = 'tr';
try {
    if (window.localStorage && localStorage.getItem('gano_lang')) {
        lang = localStorage.getItem('gano_lang');
    }
} catch (e) {}

let state = {
    creditType: 'akts',
    gradeMode: 'letter',
    targetSemester: 1,
    startSemester: 1,
    currentSemester: 1,
    baseGano: 0.0,
    baseCredits: 0.0,
    hasExisting: false,
    awaitingButunleme: false,
    history: {}
};

try {
    if (window.localStorage && localStorage.getItem('gano_state')) {
        state = JSON.parse(localStorage.getItem('gano_state'));
    }
} catch (e) {}

let currentCourses = [];
let modalEditIndex = -1;
let modalEditSem = -1;
let tempModalActivities = [];
let tempModalFinalWeight = 60;
let tempModalMode = 'letter';

function t(key) { return i18n[lang][key]; }

function setLanguage(l) {
    lang = l;
    try {
        if (window.localStorage) {
            localStorage.setItem('gano_lang', lang);
        }
    } catch (e) {}

    document.getElementById('txtTitle').innerHTML = t('title');
    document.getElementById('txtSubtitle').innerHTML = t('subtitle');
    document.getElementById('lblCalcType').innerHTML = t('calcType');
    document.getElementById('lblAkts').innerHTML = t('aktsTitle');
    document.getElementById('lblYerel').innerHTML = t('yerelTitle');
    document.getElementById('lblLocalWarn').innerHTML = t('localWarn');
    document.getElementById('lblGradeMode').innerHTML = t('gradeMode');
    document.getElementById('lblModeLetter').innerHTML = t('modeLetter');
    document.getElementById('lblModeExam').innerHTML = t('modeExam');
    document.getElementById('lblTargetSem').innerHTML = t('targetSem');
    document.getElementById('lblHasExist').innerHTML = t('hasExist');
    document.getElementById('lblStartSem').innerHTML = t('startSem');
    document.getElementById('btnStartApp').innerHTML = t('btnStart');
    document.getElementById('lblSemInfo').innerHTML = t('semInfo');
    document.getElementById('lblCourseCount').innerHTML = t('courseCount');
    document.getElementById('courseCount').placeholder = t('placeholderCount');
    document.getElementById('btnBatch').innerHTML = t('btnAddBatch');
    document.getElementById('lblRepeatCount').innerHTML = t('repeatCountLbl');
    document.getElementById('btnApplyRepeat').innerHTML = t('btnApply');
    document.getElementById('btnBack').innerHTML = t('btnBack');
    document.getElementById('txtFooter').innerHTML = t('footerText');
    document.getElementById('btnInfo').innerHTML = t('btnInfo');
    document.getElementById('btnCreateTranscript').innerHTML = t('btnCreateTranscript');
    document.getElementById('btnPrintReal').innerHTML = t('btnPrintReal');
    document.getElementById('btnRecalculate').innerHTML = t('btnRecalculate');
    document.getElementById('btnBackFromTranscript').innerHTML = t('btnBackFromTranscript');
    document.getElementById('lblTranscriptTitle').innerHTML = t('transcriptTitle');
    document.getElementById('transcriptWarning').innerHTML = t('transcriptWarn');
    document.getElementById('btnClear').innerHTML = t('btnClear');
    document.getElementById('lblTargetSemLabel').innerHTML = t('targetSem');

    populateSemesters();
    updateDynamicLabels();

    if (!document.getElementById('semester-screen').classList.contains('hidden')) {
        renderSemesterCourses();
        updateSemesterUI();
    }
    if (!document.getElementById('transcript-screen').classList.contains('hidden')) {
        renderTranscript();
    }
}

function updateDynamicLabels() {
    const isAkts = document.querySelector('input[name="creditType"]:checked').value === 'akts';
    const typeStr = isAkts ? t('aktsTitle') : t('yerelTitle');
    const startSel = parseInt(document.getElementById('startSemester').value) || 2;
    const prev = startSel - 1;

    if (lang === 'tr') {
        document.getElementById('lblExistGano').innerHTML = `Mevcut GANO (${prev}. Yarıyıl itibarıyla)`;
        document.getElementById('lblExistCredit').innerHTML = `Toplam ${typeStr} (${prev}. Yarıyıl itibarıyla)`;
    } else {
        document.getElementById('lblExistGano').innerHTML = `Current CGPA (As of Semester ${prev})`;
        document.getElementById('lblExistCredit').innerHTML = `Total ${typeStr} (As of Semester ${prev})`;
    }
}

function populateSemesters() {
    const targetSelect = document.getElementById('targetSemester');
    const startSelect = document.getElementById('startSemester');
    const targetVal = targetSelect.value;
    const startVal = startSelect.value;

    targetSelect.innerHTML = '';
    startSelect.innerHTML = '';

    for (let year = 1; year <= 4; year++) {
        const groupTarget = document.createElement('optgroup');
        const groupStart = document.createElement('optgroup');
        const label = lang === 'tr' ? `${year}. Sınıf` : `Year ${year}`;
        groupTarget.label = label;
        groupStart.label = label;

        for (let s = (year - 1) * 2 + 1; s <= year * 2; s++) {
            const optT = document.createElement('option');
            optT.value = s;
            optT.className = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';
            optT.innerHTML = lang === 'tr' ? `${s}. Yarıyıl` : `Semester ${s}`;
            groupTarget.appendChild(optT);

            if (s > 1) {
                const optS = document.createElement('option');
                optS.value = s;
                optS.className = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';
                optS.innerHTML = lang === 'tr' ? `${s}. Yarıyıl` : `Semester ${s}`;
                groupStart.appendChild(optS);
            }
        }
        targetSelect.appendChild(groupTarget);
        startSelect.appendChild(groupStart);
    }

    if (targetVal) {
        targetSelect.value = targetVal;
    } else {
        targetSelect.value = state.targetSemester;
    }

    if (startVal) {
        startSelect.value = startVal;
    } else if (state.startSemester > 1) {
        startSelect.value = state.startSemester;
    } else {
        startSelect.value = 2;
    }
}

function onTargetSemesterChange() {
    const targetVal = parseInt(document.getElementById('targetSemester').value);
    const startSelect = document.getElementById('startSemester');
    if (targetVal > 1) {
        startSelect.value = targetVal;
    } else {
        startSelect.value = 2;
    }
    updateDynamicLabels();
    saveSetupState();
}

function onStartSemesterChange() {
    updateDynamicLabels();
    saveSetupState();
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(lang);

    document.getElementById('targetSemester').addEventListener('change', onTargetSemesterChange);
    document.getElementById('startSemester').addEventListener('change', onStartSemesterChange);

    document.querySelectorAll('input[name="creditType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.creditType = e.target.value;
            const btn = document.getElementById('btnStartApp');
            const warningDiv = document.getElementById('localCreditWarning');
            if (state.creditType === 'yerel') {
                warningDiv.classList.remove('hidden');
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                warningDiv.classList.add('hidden');
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
            }
            updateDynamicLabels();
            saveSetupState();
        });
    });

    document.querySelectorAll('input[name="gradeMode"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.gradeMode = e.target.value;
            saveSetupState();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !document.getElementById('customModal').classList.contains('hidden')) {
            closeModal();
        }
    });

    restoreSetupState();
    if (Object.keys(state.history).length > 0) {
        switchScreen('semester-screen');
        loadCurrentCourses();
        renderSemesterCourses();
        updateSemesterUI();
    }
});

function toggleExistingInputs() {
    const isChecked = document.getElementById('hasExistingGano').checked;
    const container = document.getElementById('existingInputs');
    if (isChecked) {
        container.classList.remove('hidden');
        const targetVal = document.getElementById('targetSemester').value;
        if (targetVal > 1) {
            document.getElementById('startSemester').value = targetVal;
        }
        updateDynamicLabels();
    } else {
        container.classList.add('hidden');
    }
    state.hasExisting = isChecked;
    saveSetupState();
}

function saveSetupState() {
    state.targetSemester = parseInt(document.getElementById('targetSemester').value);
    state.startSemester = document.getElementById('hasExistingGano').checked ? parseInt(document.getElementById('startSemester').value) : 1;
    state.baseGano = parseFloat(document.getElementById('existGano').value) || 0;
    state.baseCredits = parseFloat(document.getElementById('existCredit').value) || 0;
    try {
        if (window.localStorage) {
            localStorage.setItem('gano_state', JSON.stringify(state));
        }
    } catch (e) {}
}

function restoreSetupState() {
    document.querySelector(`input[name="creditType"][value="${state.creditType}"]`).checked = true;
    document.querySelector(`input[name="gradeMode"][value="${state.gradeMode}"]`).checked = true;

    document.getElementById('targetSemester').value = state.targetSemester;
    document.getElementById('hasExistingGano').checked = state.hasExisting;
    document.getElementById('existGano').value = state.baseGano || '';
    document.getElementById('existCredit').value = state.baseCredits || '';

    if (state.hasExisting && state.startSemester > 1) {
        document.getElementById('startSemester').value = state.startSemester;
    } else {
        document.getElementById('startSemester').value = 2;
    }

    toggleExistingInputs();
    const btn = document.getElementById('btnStartApp');
    if (state.creditType === 'yerel') {
        document.getElementById('localCreditWarning').classList.remove('hidden');
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
    updateDynamicLabels();
}

function clearCache() {
    try {
        if (window.localStorage) {
            localStorage.removeItem('gano_state');
        }
    } catch (e) {}
    window.location.href = window.location.pathname;
}

function createNewCourseObject() {
    return {
        name: '',
        credit: '',
        mode: state.gradeMode,
        grade: '',
        activities: [{id: 1, name: lang === 'en' ? 'Midterm' : 'Vize', weight: 40, score: ''}],
        finalWeight: 60,
        finalScore: '',
        butScore: '',
        showBut: false,
        isRepeated: false,
        prevGrade: ''
    };
}

function startApp() {
    saveSetupState();
    if (state.hasExisting) {
        if (document.getElementById('existGano').value === '' || document.getElementById('existCredit').value === '') {
            showModal(t('errMissing'), t('errMissingMsg'), true);
            return;
        }
        if (state.baseGano < 0 || state.baseGano > 4) {
            showModal(t('errGano'), t('errGanoMsg'), true);
            return;
        }
        if (state.baseCredits <= 0) {
            showModal(t('errGano'), t('errCreditMsg'), true);
            return;
        }
        if (state.targetSemester < state.startSemester) {
            showModal(t('errGano'), t('errSemMsg'), true);
            return;
        }
    } else {
        state.startSemester = 1;
        state.baseGano = 0.0;
        state.baseCredits = 0.0;
    }

    state.currentSemester = state.startSemester;
    state.awaitingButunleme = false;
    state.history = {};
    try {
        if (window.localStorage) {
            localStorage.setItem('gano_state', JSON.stringify(state));
        }
    } catch (e) {}

    updateDynamicLabels();
    switchScreen('semester-screen');
    currentCourses = [];
    renderSemesterCourses();
    updateSemesterUI();
}

function loadCurrentCourses() {
    if (state.history[state.currentSemester]) {
        currentCourses = JSON.parse(JSON.stringify(state.history[state.currentSemester].courses));
    } else {
        currentCourses = [];
    }
}

function updateSemesterUI() {
    document.getElementById('currentSemesterLabel').innerHTML = state.currentSemester;
    document.getElementById('targetSemesterLabel').innerHTML = state.targetSemester;

    const btnBack = document.getElementById('btnBack');
    if (state.currentSemester > state.startSemester) btnBack.classList.remove('hidden');
    else btnBack.classList.add('hidden');

    const btnCalc = document.getElementById('btnCalculate');
    if (state.currentSemester < state.targetSemester) {
        btnCalc.innerHTML = state.awaitingButunleme ? t('btnCalcBut') : t('btnCalcSem');
        btnCalc.className = "w-full md:w-auto bg-comuBlue hover:bg-blue-800 active:transform active:scale-95 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-200 text-lg";
    } else {
        btnCalc.innerHTML = state.awaitingButunleme ? t('btnFinishBut') : t('btnFinish');
        btnCalc.className = "w-full md:w-auto bg-green-600 hover:bg-green-700 active:transform active:scale-95 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all duration-200 text-lg";
    }
}

function generateRowsFromInput() {
    syncDOMToCurrentCourses();
    const countStr = document.getElementById('courseCount').value;
    const count = countStr ? parseInt(countStr) : 1;
    for (let i = 0; i < count; i++) {
        currentCourses.push(createNewCourseObject());
    }
    state.awaitingButunleme = false;
    document.getElementById('courseCount').value = '';
    document.getElementById('repeatCountContainer').classList.remove('hidden');
    document.getElementById('repeatCount').value = '';
    renderSemesterCourses();
    updateSemesterUI();
}

function applyRepeated() {
    syncDOMToCurrentCourses();
    const rcStr = document.getElementById('repeatCount').value;
    const rc = rcStr ? parseInt(rcStr) : 0;
    for (let i = 0; i < currentCourses.length; i++) {
        currentCourses[i].isRepeated = (i < rc);
        if (!currentCourses[i].isRepeated) {
            currentCourses[i].prevGrade = '';
        }
    }
    renderSemesterCourses();
}

function syncDOMToCurrentCourses() {
    const rows = document.querySelectorAll('#courseContainer > div');
    rows.forEach((row, idx) => {
        if (!currentCourses[idx]) return;
        const c = currentCourses[idx];
        const cred = row.querySelector('.inp-credit').value;
        c.credit = cred !== '' ? parseFloat(cred.replace(',', '.')) : '';

        let nameVal = row.querySelector('.inp-name').value.trim();
        if (nameVal === '' && c.credit !== '') {
            const isAkts = state.creditType === 'akts';
            if (lang === 'tr') {
                nameVal = isAkts ? `${c.credit} AKTS'li Ders` : `${c.credit} Kredilik Ders`;
            } else {
                nameVal = isAkts ? `${c.credit} ECTS Course` : `${c.credit} Credit Course`;
            }
            row.querySelector('.inp-name').value = nameVal;
        }
        c.name = nameVal;

        if (c.isRepeated) {
            const prev = row.querySelector('.inp-prev-grade');
            if (prev) c.prevGrade = prev.value;
        }

        if (c.mode === 'letter') {
            c.grade = row.querySelector('.inp-grade').value;
        } else {
            c.activities.forEach(a => {
                const val = row.querySelector(`.inp-act-${a.id}`).value;
                a.score = val !== '' ? parseFloat(val) : '';
            });
            const fVal = row.querySelector('.inp-final').value;
            c.finalScore = fVal !== '' ? parseFloat(fVal) : '';
            if (c.showBut) {
                const bVal = row.querySelector('.inp-but').value;
                c.butScore = bVal !== '' ? parseFloat(bVal) : '';
            }
        }
    });
}

function renderSemesterCourses() {
    const container = document.getElementById('courseContainer');
    container.innerHTML = '';
    const cType = state.creditType === 'akts' ? t('aktsTitle') : t('yerelTitle');

    if (currentCourses.length > 0) {
        document.getElementById('repeatCountContainer').classList.remove('hidden');
    } else {
        document.getElementById('repeatCountContainer').classList.add('hidden');
    }

    currentCourses.forEach((c, idx) => {
        const row = document.createElement('div');
        const rowBaseClass = c.isRepeated
            ? "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700";

        row.className = `${rowBaseClass} p-4 rounded-xl border shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center transition-colors`;

        let html = `
            <div class="hidden md:flex flex-shrink-0 w-8 justify-center font-bold text-gray-400 dark:text-gray-500">${idx+1}</div>
            <div class="w-full md:w-1/3 flex-shrink-0">
                <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${t('colName')}</label>
                <input type="text" class="inp-name w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue transition shadow-inner" value="${c.name || ''}" placeholder="${t('colName')}">
            </div>
            <div class="w-full md:w-20 flex-shrink-0">
                <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${cType}</label>
                <input type="number" step="0.5" min="0" class="inp-credit w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue md:text-center transition shadow-inner" value="${c.credit || ''}" placeholder="${cType}">
            </div>
            <div class="w-full flex-grow flex flex-wrap gap-2 items-center">
        `;

        if (c.isRepeated) {
            let prevGradeOptions = `<option value="" disabled ${!c.prevGrade ? 'selected' : ''} class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${t('selectMsg')}</option>`;
            for (const grade in GRADES) {
                const sel = c.prevGrade === grade ? 'selected' : '';
                prevGradeOptions += `<option value="${grade}" ${sel} class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${grade}</option>`;
            }
            html += `
                <div class="flex-grow md:max-w-[120px]">
                    <label class="text-[10px] font-bold text-orange-600 dark:text-orange-400 mb-1 uppercase block">${t('prevGradeLbl')}</label>
                    <select class="inp-prev-grade w-full p-2.5 bg-orange-50 dark:bg-orange-900 text-orange-900 dark:text-orange-50 border border-orange-300 dark:border-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition shadow-inner text-sm">
                        ${prevGradeOptions}
                    </select>
                </div>
            `;
        }

        if (c.mode === 'letter') {
            let gradeOptions = `<option value="" disabled selected class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${t('selectMsg')}</option>`;
            for (const grade in GRADES) {
                const sel = c.grade === grade ? 'selected' : '';
                gradeOptions += `<option value="${grade}" ${sel} class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${grade}</option>`;
            }
            html += `
                <div class="flex-grow md:max-w-[150px]">
                    <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${t('colGrade')}</label>
                    <select class="inp-grade w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue transition shadow-inner">
                        ${gradeOptions}
                    </select>
                </div>
            `;
        } else {
            c.activities.forEach(a => {
                html += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-gray-500 dark:text-gray-400 font-bold mb-1" title="${a.name}">${a.name} <span class="font-normal">%${a.weight}</span></label>
                        <input type="number" min="0" max="100" class="inp-act-${a.id} w-full p-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner transition" value="${a.score !== '' ? a.score : ''}">
                    </div>
                `;
            });
            html += `
                <div class="w-20 flex-shrink-0">
                    <label class="text-[10px] uppercase truncate block text-gray-500 dark:text-gray-400 font-bold mb-1" title="Final">FİNAL <span class="font-normal">%${c.finalWeight}</span></label>
                    <input type="number" min="0" max="100" class="inp-final w-full p-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner transition" value="${c.finalScore !== '' ? c.finalScore : ''}">
                </div>
            `;
            if (c.showBut) {
                html += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-amber-600 dark:text-amber-400 font-bold mb-1" title="Bütünleme">BÜTÜNLEME</label>
                        <input type="number" min="0" max="100" class="inp-but w-full p-2 bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50 border border-amber-300 dark:border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-center shadow-inner transition" value="${c.butScore !== '' ? c.butScore : ''}">
                    </div>
                `;
            }
            html += `<div class="ml-2 w-12 text-center font-bold text-lg text-gray-500 dark:text-gray-400 mt-4 md:mt-0">${c.grade || '-'}</div>`;
        }

        html += `
            </div>
            <div class="flex-shrink-0 ml-auto md:ml-0 mt-2 md:mt-0">
                <button onclick="openSettingsModal(${idx}, -1)" class="text-sm font-semibold text-comuBlue dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-2 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition"><span class="md:hidden mr-1">⚙️</span>${t('btnSetting')}</button>
            </div>
        `;
        row.innerHTML = html;
        container.appendChild(row);
    });
}

function openSettingsModal(idx, sem) {
    if (sem === -1) {
        syncDOMToCurrentCourses();
    } else {
        saveTranscriptStateSilently();
    }
    modalEditIndex = idx;
    modalEditSem = sem;
    let course = sem === -1 ? currentCourses[idx] : state.history[sem].courses[idx];

    tempModalMode = course.mode;
    tempModalActivities = JSON.parse(JSON.stringify(course.activities));
    tempModalFinalWeight = course.finalWeight;

    renderSettingsModalContent();

    const btnSave = `<button onclick="saveSettingsModal()" class="bg-comuBlue hover:bg-blue-800 active:transform active:scale-95 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-sm">${t('btnSave')}</button>`;
    const btnCancel = `<button onclick="closeModal()" class="bg-gray-500 hover:bg-gray-600 active:transform active:scale-95 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-sm">${t('btnCancel')}</button>`;

    document.getElementById('modalTitle').innerHTML = t('settingsTitle');
    document.getElementById('modalFooter').innerHTML = btnCancel + btnSave;

    const header = document.getElementById('modalHeader');
    header.classList.remove('bg-red-600', 'dark:bg-red-800');
    header.classList.add('bg-comuBlue', 'dark:bg-blue-900');

    document.getElementById('customModal').classList.remove('hidden');
}

function renderSettingsModalContent() {
    const body = document.getElementById('modalBody');

    let html = `
        <div class="mb-6">
            <label class="block text-gray-800 dark:text-gray-200 font-bold mb-3">${t('gradeMode')}</label>
            <select id="modalModeSelect" onchange="changeModalMode()" class="w-full p-3 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-comuBlue transition shadow-inner">
                <option value="letter" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" ${tempModalMode === 'letter' ? 'selected' : ''}>${t('modeLetter')}</option>
                <option value="exam" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" ${tempModalMode === 'exam' ? 'selected' : ''}>${t('modeExam').replace(/<[^>]*>?/gm, '')}</option>
            </select>
        </div>
    `;

    if (tempModalMode === 'exam') {
        html += `
            <div class="mb-6 bg-blue-50/50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-3">${t('termActs')}</h4>
                <div class="space-y-3 mb-4">
        `;

        tempModalActivities.forEach((act, index) => {
            html += `
                <div class="flex gap-3 items-center">
                    <input type="text" value="${act.name}" onchange="updateModalAct(${act.id}, 'name', this.value)" class="w-1/2 p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue shadow-inner transition">
                    <input type="number" value="${act.weight}" onchange="updateModalAct(${act.id}, 'weight', this.value)" class="w-1/4 p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner transition">
                    <span class="text-sm font-bold text-gray-600 dark:text-gray-400">%</span>
                    ${index > 0 ? `<button onclick="removeModalAct(${act.id})" class="text-red-500 hover:text-red-700 font-bold ml-2 px-2">X</button>` : ''}
                </div>
            `;
        });

        html += `
                </div>
                <button onclick="addModalAct()" class="text-sm font-semibold text-comuBlue dark:text-blue-400 hover:underline">${t('addAct')}</button>

                <h4 class="font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">${t('finalWeight')}</h4>
                <div class="flex items-center">
                    <input type="number" id="modalFinalInput" value="${tempModalFinalWeight}" oninput="updateModalFinal()" class="w-24 p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner">
                    <span id="modalFinalWarn" class="text-amber-600 dark:text-amber-400 text-sm font-semibold ml-4 ${tempModalFinalWeight === 60 ? 'hidden' : ''}">${t('finalWarn')}</span>
                </div>
            </div>
        `;
    }

    body.innerHTML = html;
}

function changeModalMode() {
    tempModalMode = document.getElementById('modalModeSelect').value;
    renderSettingsModalContent();
}

function addModalAct() {
    const nextId = tempModalActivities.length > 0 ? Math.max(...tempModalActivities.map(a => a.id)) + 1 : 1;
    tempModalActivities.push({id: nextId, name: lang === 'en' ? 'Assignment' : 'Ödev', weight: 10, score: ''});
    renderSettingsModalContent();
}

function updateModalAct(id, field, value) {
    const act = tempModalActivities.find(a => a.id === id);
    if (act) {
        if (field === 'weight') act[field] = parseFloat(value) || 0;
        else act[field] = value;
    }
}

function removeModalAct(id) {
    tempModalActivities = tempModalActivities.filter(a => a.id !== id);
    renderSettingsModalContent();
}

function updateModalFinal() {
    const w = parseFloat(document.getElementById('modalFinalInput').value) || 0;
    tempModalFinalWeight = w;
    const warn = document.getElementById('modalFinalWarn');
    if (w !== 60) warn.classList.remove('hidden');
    else warn.classList.add('hidden');
}

function saveSettingsModal() {
    if (tempModalMode === 'exam') {
        let sum = tempModalFinalWeight;
        tempModalActivities.forEach(a => sum += a.weight);
        if (sum !== 100) {
            const body = document.getElementById('modalBody');
            let err = document.getElementById('sumErr');
            if (!err) {
                err = document.createElement('div');
                err.id = 'sumErr';
                err.className = 'mt-4 p-3 bg-red-50 text-red-600 rounded-lg font-bold text-sm';
                body.appendChild(err);
            }
            err.innerHTML = t('errSumMsg');
            return;
        }
    }

    let course;
    if (modalEditSem === -1) {
        course = currentCourses[modalEditIndex];
    } else {
        course = state.history[modalEditSem].courses[modalEditIndex];
    }

    course.mode = tempModalMode;
    if (tempModalMode === 'exam') {
        course.activities = JSON.parse(JSON.stringify(tempModalActivities));
        course.finalWeight = tempModalFinalWeight;
        if (course.grade && course.grade.length > 2) course.grade = '';
    } else {
        course.grade = '';
    }

    closeModal();
    if (modalEditSem === -1) {
        renderSemesterCourses();
    } else {
        renderTranscript();
    }
}

function calculateCourseRaw(c) {
    if (c.mode === 'letter') return null;
    let termScore = 0;
    c.activities.forEach(a => {
        const v = a.score !== '' ? parseFloat(a.score) : 0;
        termScore += v * (a.weight / 100);
    });
    const fScore = c.finalScore !== '' ? parseFloat(c.finalScore) : 0;
    const bScore = c.butScore !== '' ? parseFloat(c.butScore) : fScore;
    const examScoreToUse = (c.showBut && c.butScore !== '') ? bScore : fScore;

    return Math.round(termScore + examScoreToUse * (c.finalWeight / 100));
}

function getGradeFromRaw(raw) {
    let r = Math.round(raw);
    if (r >= 90) return 'AA';
    if (r >= 85) return 'BA';
    if (r >= 80) return 'BB';
    if (r >= 70) return 'CB';
    if (r >= 60) return 'CC';
    if (r >= 55) return 'DC';
    if (r >= 50) return 'DD';
    if (r >= 40) return 'FD';
    return 'FF';
}

function calculateCourseResult(c, raw) {
    if (c.mode === 'letter') return c.grade;
    const fScore = c.finalScore !== '' ? parseFloat(c.finalScore) : 0;
    const bScore = c.butScore !== '' ? parseFloat(c.butScore) : fScore;
    const examScoreToUse = (c.showBut && c.butScore !== '') ? bScore : fScore;

    if (examScoreToUse < 50) {
        return raw >= 40 ? 'FD' : 'FF';
    }
    return getGradeFromRaw(raw);
}

function calculateSemesterLogic(courseList, currentSem, historyState, baseGano, baseCredits) {
    let provisionalCredits = baseCredits;
    let provisionalPoints = baseCredits * baseGano;

    for (let s = 1; s < currentSem; s++) {
        if (historyState[s]) {
            historyState[s].courses.forEach(c => {
                provisionalCredits += c.credit;
                provisionalPoints += c.credit * GRADES[c.grade];
            });
        }
    }

    courseList.forEach(c => {
        if (c.isRepeated && c.prevGrade && GRADES[c.prevGrade] !== undefined) {
            provisionalCredits -= c.credit;
            provisionalPoints -= c.credit * GRADES[c.prevGrade];
        }
    });

    courseList.forEach(c => {
        provisionalCredits += c.credit;
        let courseGrade = c.grade;
        if (c.mode === 'exam') {
            const raw = calculateCourseRaw(c);
            courseGrade = calculateCourseResult(c, raw);
        }
        provisionalPoints += c.credit * GRADES[courseGrade];
    });

    const predictedGano = provisionalCredits > 0 ? (provisionalPoints / provisionalCredits) : 2.00;
    const passingScoreThreshold = predictedGano < 2.00 ? 60 : 50;

    let anyFailed = false;

    courseList.forEach(c => {
        if (c.mode === 'exam') {
            c.raw = calculateCourseRaw(c);
            c.grade = calculateCourseResult(c, c.raw);
        }
    });

    courseList.forEach(c => {
        if (c.mode === 'exam') {
            const isFailed = c.grade === 'FF' || c.grade === 'FD';
            const isConditionallyFailed = (c.grade === 'DC' || c.grade === 'DD') && predictedGano < 2.00;

            if ((isFailed || isConditionallyFailed) && !c.showBut) {
                c.showBut = true;
                anyFailed = true;
            }
        }
    });

    return { anyFailed };
}

function goBack() {
    syncDOMToCurrentCourses();
    if (currentCourses.length > 0) {
        state.history[state.currentSemester] = { courses: JSON.parse(JSON.stringify(currentCourses)) };
    }
    if (state.currentSemester > state.startSemester) {
        state.currentSemester--;
        state.awaitingButunleme = false;
        loadCurrentCourses();
        renderSemesterCourses();
        updateSemesterUI();
    }
}

function calculateSemester() {
    syncDOMToCurrentCourses();
    if (currentCourses.length === 0) return;

    let hasError = false;
    currentCourses.forEach((c) => {
        if (c.credit === '' || isNaN(c.credit) || c.credit <= 0) {
            showModal(t('errGano'), t('errRowCreditMsg'), true);
            hasError = true;
            return;
        }
        if (c.isRepeated && !c.prevGrade) {
            showModal(t('errGano'), t('errPrevGradeMsg'), true);
            hasError = true;
            return;
        }
        if (c.mode === 'letter' && !c.grade) {
            showModal(t('errMissing'), t('errRowMsg'), true);
            hasError = true;
            return;
        } else if (c.mode === 'exam') {
            if (c.finalScore === '') {
                showModal(t('errMissing'), t('errRowMsg'), true);
                hasError = true;
                return;
            }
            let allExamsValid = true;
            c.activities.forEach(a => { if (a.score !== '' && (a.score < 0 || a.score > 100)) allExamsValid = false; });
            if (c.finalScore < 0 || c.finalScore > 100) allExamsValid = false;
            if (c.butScore !== '' && (c.butScore < 0 || c.butScore > 100)) allExamsValid = false;
            if (!allExamsValid) {
                showModal(t('errGano'), t('errInvalidExam'), true);
                hasError = true;
                return;
            }
        }
    });

    if (hasError) return;

    const calcLogic = calculateSemesterLogic(currentCourses, state.currentSemester, state.history, state.baseGano, state.baseCredits);

    if (calcLogic.anyFailed) {
        state.awaitingButunleme = true;
        renderSemesterCourses();
        updateSemesterUI();
        showModal("Bütünleme", t('butunlemeFillMsg'), false, null, t('btnClose'));
        return;
    }

    let semCredits = 0;
    let semPoints = 0;
    let totalSemCredits = 0;

    currentCourses.forEach(c => {
        totalSemCredits += c.credit;
        if (!c.isRepeated) {
            semCredits += c.credit;
            semPoints += c.credit * GRADES[c.grade];
        }
    });

    if (totalSemCredits === 0) {
        showModal(t('errGano'), t('errZeroCreditMsg'), true);
        return;
    }

    state.history[state.currentSemester] = { courses: JSON.parse(JSON.stringify(currentCourses)) };
    state.awaitingButunleme = false;
    try {
        if (window.localStorage) {
            localStorage.setItem('gano_state', JSON.stringify(state));
        }
    } catch (e) {}

    let cumCredits = state.baseCredits;
    let cumPoints = state.baseCredits * state.baseGano;

    for (let sem = state.startSemester; sem <= state.currentSemester; sem++) {
        if (state.history[sem]) {
            state.history[sem].courses.forEach(c => {
                if (c.isRepeated && c.prevGrade && GRADES[c.prevGrade] !== undefined) {
                    cumCredits -= c.credit;
                    cumPoints -= c.credit * GRADES[c.prevGrade];
                }
                cumCredits += c.credit;
                cumPoints += c.credit * GRADES[c.grade];
            });
        }
    }

    const yanoRounded = semCredits > 0 ? (Math.round((semPoints / semCredits) * 100) / 100).toFixed(2) : '-';
    const gano = cumCredits > 0 ? (cumPoints / cumCredits) : 0;
    const ganoRounded = (Math.round(gano * 100) / 100).toFixed(2);
    let ganoDisp = state.currentSemester === 1 ? "-" : ganoRounded;
    const cType = state.creditType === 'akts' ? t('aktsTitle') : t('yerelTitle');

    let resultHTML = `
        <div class="mb-6 bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
            <h3 class="font-bold text-comuBlue dark:text-blue-400 border-b border-blue-200 dark:border-blue-700 pb-3 mb-3 text-lg">${t('summarySem')}</h3>
            <div class="flex justify-between mb-2 text-gray-700 dark:text-gray-300 font-medium"><span>${t('summaryTotal')} ${cType}:</span> <strong class="text-gray-900 dark:text-white">${semCredits.toFixed(1)}</strong></div>
            <div class="flex justify-between text-gray-700 dark:text-gray-300 font-medium items-center"><span>${t('summaryYano')}</span> <strong class="text-2xl text-blue-600 dark:text-blue-400">${yanoRounded}</strong></div>
        </div>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800">
            <h3 class="font-bold text-emerald-800 dark:text-emerald-400 border-b border-emerald-200 dark:border-emerald-700 pb-3 mb-3 text-lg">${t('summaryGen')}</h3>
            <div class="flex justify-between mb-2 text-gray-700 dark:text-gray-300 font-medium"><span>${t('summaryGenTotal')} ${cType}:</span> <strong class="text-gray-900 dark:text-white">${cumCredits.toFixed(1)}</strong></div>
            <div class="flex justify-between text-gray-700 dark:text-gray-300 font-medium items-center"><span>${t('summaryGano')}</span> <strong class="text-3xl text-green-600 dark:text-green-400">${ganoDisp}</strong></div>
        </div>
    `;

    renderSemesterCourses();

    if (state.currentSemester < state.targetSemester) {
        showModal(t('modalTitleResult'), resultHTML, false, () => {
            state.currentSemester++;
            loadCurrentCourses();
            renderSemesterCourses();
            updateSemesterUI();
        }, t('btnNextSem'));
    } else {
        resultHTML += `<div class="mt-8 text-center text-white bg-green-600 p-3 rounded-xl font-bold shadow-md text-lg">${t('successMsg')}</div>`;
        showModal(t('modalTitleResult'), resultHTML, false, () => {
            switchScreen('setup-screen');
        }, t('btnHome'));
    }
}

function switchScreen(screenId) {
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('semester-screen').classList.add('hidden');
    document.getElementById('transcript-screen').classList.add('hidden');
    document.getElementById(screenId).classList.remove('hidden');
}

function openTranscript() {
    if (!document.getElementById('semester-screen').classList.contains('hidden')) {
        syncDOMToCurrentCourses();
        if (currentCourses.length > 0) {
            state.history[state.currentSemester] = { courses: JSON.parse(JSON.stringify(currentCourses)) };
            try {
                if (window.localStorage) {
                    localStorage.setItem('gano_state', JSON.stringify(state));
                }
            } catch (e) {}
        }
    }
    switchScreen('transcript-screen');
    renderTranscript();
}

function saveTranscriptStateSilently() {
    for (let s = state.startSemester; s <= state.targetSemester; s++) {
        if (!state.history[s] || state.history[s].courses.length === 0) continue;
        const rows = document.querySelectorAll(`.transcript-row-${s}`);
        if (rows.length === 0) continue;

        rows.forEach((row, idx) => {
            const c = state.history[s].courses[idx];
            const cred = row.querySelector('.inp-credit').value;
            c.credit = cred !== '' ? parseFloat(cred.replace(',', '.')) : '';

            let nameVal = row.querySelector('.inp-name').value.trim();
            if (nameVal === '' && c.credit !== '') {
                const isAkts = state.creditType === 'akts';
                if (lang === 'tr') {
                    nameVal = isAkts ? `${c.credit} AKTS'li Ders` : `${c.credit} Kredilik Ders`;
                } else {
                    nameVal = isAkts ? `${c.credit} ECTS Course` : `${c.credit} Credit Course`;
                }
                row.querySelector('.inp-name').value = nameVal;
            }
            c.name = nameVal;

            if (c.mode === 'letter') {
                c.grade = row.querySelector('.inp-grade').value;
            } else {
                c.activities.forEach(a => {
                    const val = row.querySelector(`.inp-act-${a.id}`).value;
                    a.score = val !== '' ? parseFloat(val) : '';
                });
                const fVal = row.querySelector('.inp-final').value;
                c.finalScore = fVal !== '' ? parseFloat(fVal) : '';
                if (c.showBut) {
                    const bVal = row.querySelector('.inp-but').value;
                    c.butScore = bVal !== '' ? parseFloat(bVal) : '';
                }
            }
        });
    }
    try {
        if (window.localStorage) {
            localStorage.setItem('gano_state', JSON.stringify(state));
        }
    } catch (e) {}
}

function renderTranscript() {
    const container = document.getElementById('transcriptContainer');
    container.innerHTML = '';
    const cType = state.creditType === 'akts' ? t('aktsTitle') : t('yerelTitle');

    let hasData = false;
    for (let s = state.startSemester; s <= state.targetSemester; s++) {
        if (!state.history[s] || state.history[s].courses.length === 0) continue;
        hasData = true;

        let html = `<div class="bg-gray-50 dark:bg-gray-800/50 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="font-bold text-lg text-comuBlue dark:text-blue-400 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">${t('semPrefix')}${s}${t('semSuffix')}</h3>
            <div class="transcript-courses-${s} space-y-4"></div>
        </div>`;

        container.insertAdjacentHTML('beforeend', html);
        const courseCont = container.querySelector(`.transcript-courses-${s}`);

        state.history[s].courses.forEach((c, idx) => {
            const row = document.createElement('div');
            row.className = `transcript-row-${s} bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center`;

            let rowHtml = `
                <div class="hidden md:flex flex-shrink-0 w-8 justify-center font-bold text-gray-400 dark:text-gray-500">${idx+1}</div>
                <div class="w-full md:w-1/3 flex-shrink-0">
                    <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${t('colName')}</label>
                    <input type="text" class="inp-name w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue transition shadow-inner" value="${c.name || ''}">
                </div>
                <div class="w-full md:w-20 flex-shrink-0">
                    <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${cType}</label>
                    <input type="number" step="0.5" min="0" class="inp-credit w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue md:text-center transition shadow-inner" value="${c.credit || ''}">
                </div>
                <div class="w-full flex-grow flex flex-wrap gap-2 items-center">
            `;

            if (c.mode === 'letter') {
                let gradeOptions = `<option value="" disabled selected class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${t('selectMsg')}</option>`;
                for (const grade in GRADES) {
                    const sel = c.grade === grade ? 'selected' : '';
                    gradeOptions += `<option value="${grade}" ${sel} class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">${grade}</option>`;
                }
                rowHtml += `
                    <div class="flex-grow md:max-w-[150px]">
                        <label class="md:hidden block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase">${t('colGrade')}</label>
                        <select class="inp-grade w-full p-2.5 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue transition shadow-inner">
                            ${gradeOptions}
                        </select>
                    </div>
                `;
            } else {
                c.activities.forEach(a => {
                    rowHtml += `
                        <div class="w-20 flex-shrink-0">
                            <label class="text-[10px] uppercase truncate block text-gray-500 dark:text-gray-400 font-bold mb-1" title="${a.name}">${a.name} <span class="font-normal">%${a.weight}</span></label>
                            <input type="number" min="0" max="100" class="inp-act-${a.id} w-full p-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner transition" value="${a.score !== '' ? a.score : ''}">
                        </div>
                    `;
                });
                rowHtml += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-gray-500 dark:text-gray-400 font-bold mb-1" title="Final">FİNAL <span class="font-normal">%${c.finalWeight}</span></label>
                        <input type="number" min="0" max="100" class="inp-final w-full p-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-comuBlue text-center shadow-inner transition" value="${c.finalScore !== '' ? c.finalScore : ''}">
                    </div>
                `;
                if (c.showBut) {
                    rowHtml += `
                        <div class="w-20 flex-shrink-0">
                            <label class="text-[10px] uppercase truncate block text-amber-600 dark:text-amber-400 font-bold mb-1" title="Bütünleme">BÜTÜNLEME</label>
                            <input type="number" min="0" max="100" class="inp-but w-full p-2 bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50 border border-amber-300 dark:border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-center shadow-inner transition" value="${c.butScore !== '' ? c.butScore : ''}">
                        </div>
                    `;
                }

                let isFailed = c.grade === 'FF' || c.grade === 'FD' || c.grade === 'DD' || c.grade === 'DC';
                let gradeClass = isFailed ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400";
                rowHtml += `<div class="ml-2 w-12 text-center font-bold text-lg ${gradeClass} mt-4 md:mt-0">${c.grade || '-'}</div>`;
            }

            rowHtml += `
                </div>
                <div class="flex-shrink-0 ml-auto md:ml-0 mt-2 md:mt-0">
                    <button onclick="openSettingsModal(${idx}, ${s})" class="text-sm font-semibold text-comuBlue dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-2 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition"><span class="md:hidden mr-1">⚙️</span>${t('btnSetting')}</button>
                </div>
            `;
            row.innerHTML = rowHtml;
            courseCont.appendChild(row);
        });
    }
    if (!hasData) {
        container.innerHTML = `<div class="text-center text-gray-500 dark:text-gray-400 py-8">Kayıtlı veri bulunamadı.</div>`;
    }
}

function saveTranscriptEdits() {
    saveTranscriptStateSilently();

    let hasError = false;
    let needsBut = false;

    for (let s = state.startSemester; s <= state.targetSemester; s++) {
        if (!state.history[s] || state.history[s].courses.length === 0) continue;

        const calcLogic = calculateSemesterLogic(state.history[s].courses, s, state.history, state.baseGano, state.baseCredits);

        if (calcLogic.anyFailed) {
            needsBut = true;
        }

        state.history[s].courses.forEach(c => {
            if (c.credit === '' || isNaN(c.credit) || c.credit <= 0) hasError = true;
            if (c.mode === 'letter' && !c.grade) hasError = true;
            if (c.mode === 'exam') {
                if (c.finalScore === '') hasError = true;
            }
        });
    }

    if (hasError) {
        showModal(t('errGano'), t('errRowCreditMsg'), true);
        return;
    }

    try {
        if (window.localStorage) {
            localStorage.setItem('gano_state', JSON.stringify(state));
        }
    } catch (e) {}

    renderTranscript();

    if (needsBut) {
        showModal("Bütünleme", t('butunlemeFillMsg'), false, null, t('btnClose'));
        return;
    }

    const btnCalc = document.getElementById('btnRecalculate');
    const originalText = btnCalc.innerHTML;
    btnCalc.innerHTML = "✓";
    btnCalc.classList.replace('bg-amber-500', 'bg-green-500');

    setTimeout(() => {
        btnCalc.innerHTML = originalText;
        btnCalc.classList.replace('bg-green-500', 'bg-amber-500');
    }, 1000);
}

function printTranscript() {
    saveTranscriptEdits();

    let html = `<html><head><title>${t('title')} - Transcript</title><style>
        body { font-family: sans-serif; padding: 30px; color: #333; line-height: 1.6; max-width: 800px; margin: auto; }
        h2 { color: #003366; border-bottom: 3px solid #003366; padding-bottom: 10px; margin-bottom: 30px; text-align:center; }
        h3 { color: #444; margin-top: 30px; border-left: 4px solid #003366; padding-left: 10px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; font-size: 13px; }
        th { background-color: #f8f9fa; font-weight: bold; color: #555; text-transform: uppercase; }
        .text-center { text-align: center; }
        .summary-box { background: #f0f7ff; padding: 12px; font-weight: bold; font-size: 14px; border: 1px solid #cce0ff; border-radius: 4px; margin-bottom: 30px; color: #003366; display: flex; justify-content: space-between; }
        .overall-box { background: #e6ffed; padding: 15px; font-weight: bold; font-size: 16px; border: 2px solid #b3e6c2; border-radius: 4px; margin-top: 40px; color: #006622; text-align: center; }
    </style></head><body>`;

    html += `<h2>${t('title')}</h2>`;
    const cType = state.creditType === 'akts' ? t('aktsTitle') : t('yerelTitle');

    let cumCrd = state.baseCredits;
    let cumPts = state.baseCredits * state.baseGano;

    for (let s = state.startSemester; s <= state.targetSemester; s++) {
        if (!state.history[s] || state.history[s].courses.length === 0) continue;
        html += `<h3>${t('semPrefix')}${s}${t('semSuffix')}</h3>`;
        html += `<table><tr><th>${t('colName')}</th><th class="text-center">${cType}</th><th class="text-center">${t('lblRaw')}</th><th class="text-center">${t('colGrade')}</th></tr>`;

        let semCrd = 0;
        let semPts = 0;

        state.history[s].courses.forEach(c => {
            let rawDisp = c.mode === 'letter' ? '-' : c.raw || calculateCourseRaw(c);
            html += `<tr><td>${c.name || '-'}</td><td class="text-center">${c.credit}</td><td class="text-center">${rawDisp}</td><td class="text-center">${c.grade}</td></tr>`;

            if (c.isRepeated && c.prevGrade && GRADES[c.prevGrade] !== undefined) {
                cumCrd -= c.credit;
                cumPts -= c.credit * GRADES[c.prevGrade];
            }

            if (!c.isRepeated) {
                semCrd += c.credit;
                semPts += c.credit * GRADES[c.grade];
            }

            cumCrd += c.credit;
            cumPts += c.credit * GRADES[c.grade];
        });

        html += `</table>`;

        let yano = semCrd > 0 ? (Math.round((semPts / semCrd) * 100) / 100).toFixed(2) : '-';
        let gano = cumCrd > 0 ? (Math.round((cumPts / cumCrd) * 100) / 100).toFixed(2) : '0.00';
        let ganoDispPrint = s === 1 ? "-" : gano;
        html += `<div class="summary-box"><span>${t('yano')}: ${yano}</span><span>${t('gano')}: ${ganoDispPrint}</span></div>`;
    }

    let finalGano = cumCrd > 0 ? (Math.round((cumPts / cumCrd) * 100) / 100).toFixed(2) : '0.00';
    html += `<div class="overall-box">Nihai ${t('gano')}: ${finalGano}</div>`;
    html += `</body></html>`;

    const win = window.open('', '', 'width=800,height=600');
    win.document.write(html);
    win.document.close();
    win.print();
}

function showInfo() {
    const btnCancel = `<button onclick="closeModal()" class="bg-gray-500 hover:bg-gray-600 active:transform active:scale-95 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-sm">${t('btnClose')}</button>`;
    document.getElementById('modalFooter').innerHTML = btnCancel;
    showModal(t('infoTitle'), t('infoBody'), false, null, t('btnClose'));
}

function showModal(title, message, isError = false, actionCallback = null, actionText = t('btnClose')) {
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalBody').innerHTML = message;

    const header = document.getElementById('modalHeader');
    if (isError) {
        header.classList.remove('bg-comuBlue', 'dark:bg-blue-900');
        header.classList.add('bg-red-600', 'dark:bg-red-800');
    } else {
        header.classList.remove('bg-red-600', 'dark:bg-red-800');
        header.classList.add('bg-comuBlue', 'dark:bg-blue-900');
    }

    const btnHtml = `<button onclick="document.getElementById('modalActionBtnProxy').click()" class="${isError ? 'bg-red-600 hover:bg-red-800' : 'bg-comuBlue hover:bg-blue-800'} active:transform active:scale-95 text-white font-bold py-2.5 px-8 rounded-xl transition-all shadow-sm">${actionText}</button><button id="modalActionBtnProxy" class="hidden"></button>`;
    document.getElementById('modalFooter').innerHTML = btnHtml;

    document.getElementById('modalActionBtnProxy').onclick = () => {
        closeModal();
        if (actionCallback) actionCallback();
    };

    document.getElementById('customModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('customModal').classList.add('hidden');
}