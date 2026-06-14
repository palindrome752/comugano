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
        footerText: "Bu araç öğrenciler tarafından öğrenciler için hazırlanmış olup, resmi bağlayıcılığı yoktur.",
        btnInfo: "Ek Bilgi ve Yönetmelik",
        btnCreateTranscript: "Transkript Önizlemesi",
        btnPrintReal: "Transkripti İndir/Yazdır",
        btnRecalculate: "Yeniden Hesapla",
        btnBackFromTranscript: "Geri Dön",
        transcriptTitle: "Transkript Önizlemesi",
        transcriptWarn: "Hesaplamalarda yanlışlık olduğunu düşünüyorsanız lütfen transkript üzerinde düzenleme yapın.",
        btnClear: "Verileri Sıfırla",
        btnClose: "Kapat",
        btnSave: "Kaydet",
        btnCancel: "İptal",
        modalTitleResult: "Sonuç",
        summarySem: "Bu Yarıyıl Özeti",
        summaryTotal: "YANO'ya Etki Eden",
        summaryYano: "YANO (Yarıyıl Ortalaması):",
        summaryGen: "Genel Durum",
        summaryGenTotal: "Genel Toplam",
        summaryGano: "GANO (Genel Ortalama):",
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
        errSumMsg: "Ağırlık toplamı %100 olmalıdır.",
        errPrevGradeMsg: "Lütfen tekrar edilen dersler için geçmiş dönem harf notunu seçiniz.",
        infoTitle: "Ek Bilgi ve Yönetmelik",
        infoBody: `
            <div class="space-y-6">
                <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                    <h4 class="font-bold text-comuBlue dark:text-blue-400 mb-3 text-lg">MADDE 26 – Başarı Notu</h4>
                    <p class="text-sm mb-4">100 puan üzerinden verilen dönem içi eğitim öğretim etkinliklerinden (ara sınav/sınavlar, uygulama, staj, seminer, proje, ödev, laboratuvar vb.) alınan notların ortalamasının %40'ı ve yarıyıl sonu veya bütünleme sınav notunun %60'ı alınıp toplanarak öğrencinin başarı notu hesaplanır. "Başarı Notu Değerlendirme Tablosu"na göre Harf Notu ve AKTS notu verilir.</p>
                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">AA: 4.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">BA: 3.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">BB: 3.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">CB: 2.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">CC: 2.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">DC: 1.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">DD: 1.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">FD: 0.5</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-2 text-center rounded-lg shadow-sm border border-red-100 dark:border-red-800 text-sm font-semibold">FF: 0.0</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-2 text-center rounded-lg shadow-sm border border-red-100 dark:border-red-800 text-sm font-semibold">DZ: 0.0</div>
                    </div>
                    <p class="text-sm mt-4">Kredisiz olan dersler ile stajların devamsızlık ve başarı değerlendirmelerinde; (YE) yeterli, (YS) yetersiz, (DS) devamsız sayılır. Tekrar edilen derslerde alınan son başarı notu geçerlidir. Bir dersin devam koşulunu bir kez yerine getiren öğrencilerin bu dersi tekrar almaları durumunda devam koşulu aranmaz.</p>
                    <p class="text-sm mt-2">Bir dersten başarılı sayılabilmek için diğer şartlara ek olarak o dersin yarıyıl sonu veya bütünleme sınavından en az 50 puan almak gerekir, bu puanı alamayan öğrencilerin başarı notu 40'ın altında ise FF, 40 ve üzerinde ise FD harf notu olarak takdir edilir.</p>
                    <p class="text-sm mt-2">Başarı notu değerlendirme tablosuna göre kredili bir dersten bir öğrenci; a) (AA), (BA), (BB), (CB) veya (CC) notlarından birini almış ise o dersi başarmış sayılır. b) (DC) veya (DD) notlarından birini almış ve GNO’su 2.00 ve üzeri ise koşullu başarılı sayılır. c) (DC) veya (DD) notlarından birini almış ve GNO’su 2.00’ın altında ise koşullu başarısız sayılır. ç) (FD) ve (FF) notlarından birini almış ise başarısız sayılır. d) Derse devam koşulunu yerine getirmediyse devamsız (DS) sayılır. e) Kredisiz olan dersler ile stajların devamsızlık ve başarı değerlendirmelerinde; (YE) yeterli, (YS) yetersiz, (DS) devamsız sayılır. f) Öğrencinin girmeyi hak etmediği bir sınava girmesi sonucunda aldığı not iptal edilir.</p>
                </div>
                <div class="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <h4 class="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-lg">MADDE 28 – Genel Not Ortalaması ve Dönem Not Ortalaması</h4>
                    <p class="text-sm">Öğrencilerin başarı durumları, 26 ncı maddeye göre derslerden almış oldukları pick notlar ve derslerin AKTS kredileri yoluyla hesaplanan Dönem Not Ortalaması (DNO) ve Genel Not Ortalaması (GNO) değerleriyle izlenir. DNO bir yarıyılda alınan derslerin her birinin AKTS kredisi ile bu derslerden alınan notların katsayısının çarpımları toplamının, aynı derslerin AKTS kredi toplamına bölünmesi ile elde edilir. Elde edilen ortalama, virgülden sonra iki hane olmak üzere gösterilir. Virgülden sonraki üçüncü hane, beşten küçükse sıfıra; beş veya beşten büyükse, ikinci haneyi bir rakam artıracak şekilde yuvarlanarak hesaplanır. GNO ise tüm yarıyıllarda alınan derslerin her birinin AKTS kredisi ile bu derslerden alınan notların katsayısının çarpımları toplamının tüm derslerin AKTS kredisi toplamına bölünmesi ile elde edilir. Sonuç, virgülden sonra iki hane olmak üzere gösterilir. Virgülden sonraki üçüncü hane için ikinci fıkrada yer alan hüküm uygulanır.</p>
                </div>
            </div>
        `,
        semPrefix: "",
        semSuffix: ". Yarıyıl",
        successMsg: "Hesaplama Tamamlandı!",
        yano: "YANO",
        gano: "GANO",
        akts: "AKTS",
        butunlemeFillMsg: "Başarısız olunan dersler için bütünleme notlarını giriniz.",
        settingsTitle: "Ders Ayarları",
        termActs: "Dönem İçi Etkinlikler",
        addAct: "+ Yeni Etkinlik Ekle",
        finalWeight: "Final Ağırlığı (%)",
        finalWarn: "Final genelde %60'tır.",
        btnSetting: "Ayar",
        lblRaw: "Ort."
    },
    en: {
        title: "COMU GPA Calculator",
        subtitle: "Undergraduate GPA Tool",
        calcType: "Credit Type",
        aktsTitle: "ECTS",
        yerelTitle: "Local Credit",
        localWarn: "ECTS system is used in COMU.",
        gradeMode: "Entry Mode",
        modeLetter: "Letter Grade",
        modeExam: 'Exams <span class="text-[10px] bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded ml-2 uppercase font-bold">Detailed</span>',
        targetSem: "Target Semester",
        hasExist: "I have an existing CGPA (If not selected, it starts from Semester 1)",
        existGano: "Current CGPA",
        existCredit: "Total ECTS",
        startSem: "Starting Semester",
        btnStart: "Start Calculation",
        semInfo: ". Semester Info",
        courseCount: "Courses taken this semester:",
        placeholderCount: "Enter number",
        btnAddBatch: "Add",
        repeatCountLbl: "Enter number of repeated courses:",
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
        footerText: "This tool is created by students for students, no official validity.",
        btnInfo: "Additional Info & Regulations",
        btnCreateTranscript: "Transcript Preview",
        btnPrintReal: "Download/Print Transcript",
        btnRecalculate: "Recalculate",
        btnBackFromTranscript: "Go Back",
        transcriptTitle: "Transcript Preview",
        transcriptWarn: "If you think there is an error, please edit on the transcript.",
        btnClear: "Reset Data",
        btnClose: "Close",
        btnSave: "Save",
        btnCancel: "Cancel",
        modalTitleResult: "Result",
        summarySem: "Semester Summary",
        summaryTotal: "Semester ECTS",
        summaryYano: "GPA:",
        summaryGen: "Overall Status",
        summaryGenTotal: "Overall Total",
        summaryGano: "CGPA:",
        btnNextSem: "Next Semester",
        btnHome: "Return Home",
        errMissing: "Missing Info",
        errMissingMsg: "Please enter CGPA and ECTS completely.",
        errGano: "Error",
        errGanoMsg: "CGPA must be between 0.00 and 4.00.",
        errCreditMsg: "Completed amount must be > 0.",
        errSemMsg: "Target semester cannot be less than starting semester.",
        errRowMsg: "Please fill ECTS and required grade fields.",
        errRowCreditMsg: "Credit/ECTS value must be > 0.",
        errZeroCreditMsg: "Total semester amount cannot be zero.",
        errInvalidExam: "Exam grades must be between 0 and 100.",
        errSumMsg: "Sum of weights must be 100%.",
        errPrevGradeMsg: "Please select previous grade for repeated courses.",
        infoTitle: "Info & Regulations",
        infoBody: `
            <div class="space-y-6">
                <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800">
                    <h4 class="font-bold text-comuBlue dark:text-blue-400 mb-3 text-lg">ARTICLE 26 – Success Grade</h4>
                    <p class="text-sm mb-4">The student's success grade is calculated by taking 40% of the average of the grades obtained from the in-term educational activities evaluated over 100 points (midterm exam/exams, practice, internship, seminar, project, assignment, laboratory, etc.) and 60% of the end-of-semester or make-up exam grade. Letter Grade and ECTS grade are given according to the "Success Grade Evaluation Table".</p>
                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">AA: 4.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">BA: 3.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">BB: 3.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">CB: 2.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">CC: 2.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">DC: 1.5</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">DD: 1.0</div>
                        <div class="bg-white dark:bg-gray-800 p-2 text-center rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-sm font-semibold">FD: 0.5</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-2 text-center rounded-lg shadow-sm border border-red-100 dark:border-red-800 text-sm font-semibold">FF: 0.0</div>
                        <div class="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-2 text-center rounded-lg shadow-sm border border-red-100 dark:border-red-800 text-sm font-semibold">DZ: 0.0</div>
                    </div>
                    <p class="text-sm mt-4">In the attendance and success evaluation of non-credit courses and internships; (YE) is considered sufficient, (YS) insufficient, (DS) absent. In repeated courses, the last success grade obtained is valid. The attendance condition is not sought in case the students who fulfill the attendance condition of a course once take this course again.</p>
                    <p class="text-sm mt-2">To be considered successful in a course, in addition to other conditions, it is necessary to get at least 50 points from the end-of-semester or make-up exam of that course; the success grade of the students who cannot get this score is appreciated as FF if it is below 40, and FD if it is 40 and above.</p>
                </div>
                <div class="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-100 dark:border-emerald-800">
                    <h4 class="font-bold text-emerald-800 dark:text-emerald-400 mb-2 text-lg">ARTICLE 28 – Overall Grade Point Average and Semester Grade Point Average</h4>
                    <p class="text-sm">Students' success status is monitored by the Semester Grade Point Average (GPA) and Overall Grade Point Average (CGPA) values calculated through the grades they receive from the courses according to Article 26 and the ECTS credits of the courses. GPA is obtained by dividing the sum of the products of the ECTS credits of each of the courses taken in a semester and the coefficient of the grades obtained from these courses by the total ECTS credits of the same courses. The calculated average is shown with two digits after the decimal point. If the third digit after the decimal is less than five, it is calculated as zero; if it is five or greater, it is calculated by rounding the second digit up by one number.</p>
                </div>
            </div>
        `,
        semPrefix: "Semester ",
        semSuffix: "",
        successMsg: "Calculation Done!",
        yano: "GPA",
        gano: "CGPA",
        akts: "ECTS",
        butunlemeFillMsg: "Enter make-up exam grades for failed courses.",
        settingsTitle: "Course Settings",
        termActs: "Term Activities",
        addAct: "+ Add Activity",
        finalWeight: "Final Weight (%)",
        finalWarn: "Final is usually 60%.",
        btnSetting: "Set",
        lblRaw: "Avg."
    }
};

const GRADES = {
    "AA": 4.0, "BA": 3.5, "BB": 3.0, "CB": 2.5, "CC": 2.0,
    "DC": 1.5, "DD": 1.0, "FD": 0.5, "FF": 0.0, "DZ": 0.0
};

let lang = 'tr';
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
    if (localStorage.getItem('gano_lang')) lang = localStorage.getItem('gano_lang');
    if (localStorage.getItem('gano_state')) state = JSON.parse(localStorage.getItem('gano_state'));
} catch (e) {
}

let currentCourses = [];
let modalEditIndex = -1;
let modalEditSem = -1;
let tempModalActivities = [];
let tempModalFinalWeight = 60;
let tempModalMode = 'letter';

function t(key) {
    return i18n[lang][key];
}

function setLanguage(l) {
    lang = l;
    
    try {
        localStorage.setItem('gano_lang', lang);
    } catch (e) {
    }

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
        document.getElementById('lblExistGano').innerHTML = `Mevcut GANO (${prev}. Yarıyıl)`;
        document.getElementById('lblExistCredit').innerHTML = `Toplam ${typeStr} (${prev}. Yarıyıl)`;
    } else {
        document.getElementById('lblExistGano').innerHTML = `Current CGPA (Sem ${prev})`;
        document.getElementById('lblExistCredit').innerHTML = `Total ${typeStr} (Sem ${prev})`;
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
            optT.innerHTML = lang === 'tr' ? `${s}. Yarıyıl` : `Semester ${s}`;
            groupTarget.appendChild(optT);

            if (s > 1) {
                const optS = document.createElement('option');
                optS.value = s;
                optS.innerHTML = lang === 'tr' ? `${s}. Yarıyıl` : `Semester ${s}`;
                groupStart.appendChild(optS);
            }
        }
        targetSelect.appendChild(groupTarget);
        startSelect.appendChild(groupStart);
    }

    targetSelect.value = targetVal || state.targetSemester;
    startSelect.value = startVal || (state.startSemester > 1 ? state.startSemester : 2);
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

window.onload = () => {
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

    restoreSetupState();
    
    if (Object.keys(state.history).length > 0) {
        switchScreen('semester-screen');
        loadCurrentCourses();
        renderSemesterCourses();
        updateSemesterUI();
    }
};

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
        localStorage.setItem('gano_state', JSON.stringify(state));
    } catch (e) {
    }
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
        localStorage.removeItem('gano_state');
    } catch (e) {
    }
    window.location.reload();
}

function createNewCourseObject() {
    return {
        name: '',
        credit: '',
        mode: state.gradeMode,
        grade: '',
        activities: [{ id: 1, name: lang === 'en' ? 'Midterm' : 'Vize', weight: 40, score: '' }],
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
        localStorage.setItem('gano_state', JSON.stringify(state));
    } catch (e) {
    }

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
    if (state.currentSemester > state.startSemester) {
        btnBack.classList.remove('hidden');
    } else {
        btnBack.classList.add('hidden');
    }

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
            nameVal = state.creditType === 'akts' 
                ? (lang === 'tr' ? `${c.credit} AKTS` : `${c.credit} ECTS`) 
                : (lang === 'tr' ? `${c.credit} Kredi` : `${c.credit} Credit`);
            row.querySelector('.inp-name').value = nameVal;
        }
        c.name = nameVal;

        if (c.isRepeated) {
            const prev = row.querySelector('.inp-prev-grade');
            if (prev) {
                c.prevGrade = prev.value;
            }
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
            <div class="hidden md:flex flex-shrink-0 w-8 justify-center font-bold text-gray-400 dark:text-gray-500">${idx + 1}</div>
            <div class="w-full md:w-1/3 flex-shrink-0">
                <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${t('colName')}</label>
                <input type="text" class="inp-name w-full p-4 md:p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-lg md:text-base focus:ring-2 focus:ring-comuBlue shadow-inner" value="${c.name || ''}" placeholder="${t('colName')}">
            </div>
            <div class="w-full md:w-20 flex-shrink-0">
                <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${cType}</label>
                <input type="number" step="0.5" min="0" class="inp-credit w-full p-4 md:p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-lg md:text-base focus:ring-2 focus:ring-comuBlue md:text-center shadow-inner" value="${c.credit || ''}" placeholder="${cType}">
            </div>
            <div class="w-full flex-grow flex flex-wrap gap-2 items-center">
        `;

        if (c.isRepeated) {
            let pOpts = `<option value="" disabled ${!c.prevGrade ? 'selected' : ''}>${t('selectMsg')}</option>`;
            for (const g in GRADES) {
                pOpts += `<option value="${g}" ${c.prevGrade === g ? 'selected' : ''}>${g}</option>`;
            }
            html += `
                <div class="flex-grow md:max-w-[120px]">
                    <label class="text-[10px] font-bold text-orange-600 mb-1 block">${t('prevGradeLbl')}</label>
                    <select class="inp-prev-grade w-full p-4 md:p-2.5 bg-orange-100 border border-orange-300 rounded-lg text-lg md:text-sm focus:ring-2 focus:ring-orange-500 shadow-inner">${pOpts}</select>
                </div>
            `;
        }

        if (c.mode === 'letter') {
            let gOpts = `<option value="" disabled selected>${t('selectMsg')}</option>`;
            for (const g in GRADES) {
                gOpts += `<option value="${g}" ${c.grade === g ? 'selected' : ''}>${g}</option>`;
            }
            html += `
                <div class="flex-grow md:max-w-[150px]">
                    <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${t('colGrade')}</label>
                    <select class="inp-grade w-full p-4 md:p-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-lg md:text-base focus:ring-2 focus:ring-comuBlue shadow-inner">${gOpts}</select>
                </div>
            `;
        } else {
            c.activities.forEach(a => {
                html += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-gray-500 font-bold mb-1">${a.name} %${a.weight}</label>
                        <input type="number" min="0" max="100" class="inp-act-${a.id} w-full p-3 md:p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-lg md:text-base text-center shadow-inner" value="${a.score !== '' ? a.score : ''}">
                    </div>
                `;
            });
            html += `
                <div class="w-20 flex-shrink-0">
                    <label class="text-[10px] uppercase truncate block text-gray-500 font-bold mb-1">FİNAL %${c.finalWeight}</label>
                    <input type="number" min="0" max="100" class="inp-final w-full p-3 md:p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-lg md:text-base text-center shadow-inner" value="${c.finalScore !== '' ? c.finalScore : ''}">
                </div>
            `;
            if (c.showBut) {
                html += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-amber-600 font-bold mb-1">BÜTÜNLEME</label>
                        <input type="number" min="0" max="100" class="inp-but w-full p-3 md:p-2 bg-amber-50 border border-amber-300 rounded-lg text-lg md:text-base text-center shadow-inner" value="${c.butScore !== '' ? c.butScore : ''}">
                    </div>
                `;
            }
            html += `<div class="ml-2 w-12 text-center font-bold text-2xl md:text-lg text-gray-500 mt-4 md:mt-0">${c.grade || '-'}</div>`;
        }

        html += `
            </div>
            <div class="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <button onclick="openSettingsModal(${idx}, -1)" class="w-full md:w-auto text-base md:text-sm font-semibold text-comuBlue bg-blue-50 md:bg-transparent px-4 py-3 md:px-3 md:py-2 rounded-lg border border-blue-200 transition">⚙️ ${t('btnSetting')}</button>
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

    const btnSave = `<button onclick="saveSettingsModal()" class="bg-comuBlue text-white font-bold py-3 px-8 rounded-xl shadow-sm">${t('btnSave')}</button>`;
    const btnCancel = `<button onclick="closeModal()" class="bg-gray-500 text-white font-bold py-3 px-8 rounded-xl shadow-sm">${t('btnCancel')}</button>`;

    document.getElementById('modalTitle').innerHTML = t('settingsTitle');
    document.getElementById('modalFooter').innerHTML = btnCancel + btnSave;
    document.getElementById('customModal').classList.remove('hidden');
}

function renderSettingsModalContent() {
    const body = document.getElementById('modalBody');
    let html = `
        <div class="mb-6">
            <label class="block text-gray-800 dark:text-gray-200 font-bold mb-3">${t('gradeMode')}</label>
            <select id="modalModeSelect" onchange="changeModalMode()" class="w-full p-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-lg shadow-inner">
                <option value="letter" ${tempModalMode === 'letter' ? 'selected' : ''}>${t('modeLetter')}</option>
                <option value="exam" ${tempModalMode === 'exam' ? 'selected' : ''}>${t('modeExam').replace(/<[^>]*>?/gm, '')}</option>
            </select>
        </div>
    `;
    
    if (tempModalMode === 'exam') {
        html += `
            <div class="mb-6 bg-blue-50 p-5 rounded-xl border border-blue-100">
                <h4 class="font-bold text-gray-800 mb-3">${t('termActs')}</h4>
                <div class="space-y-3 mb-4">
        `;
        
        tempModalActivities.forEach((act, index) => {
            html += `
                <div class="flex gap-3 items-center">
                    <input type="text" value="${act.name}" onchange="updateModalAct(${act.id}, 'name', this.value)" class="w-1/2 p-3 bg-white border border-gray-300 rounded-lg text-base">
                    <input type="number" value="${act.weight}" onchange="updateModalAct(${act.id}, 'weight', this.value)" class="w-1/4 p-3 bg-white border border-gray-300 rounded-lg text-center text-base">
                    <span class="text-sm font-bold text-gray-600">%</span>
                    ${index > 0 ? `<button onclick="removeModalAct(${act.id})" class="text-red-500 font-bold ml-2 px-3 py-2 bg-red-100 rounded-lg">X</button>` : ''}
                </div>
            `;
        });
        
        html += `
                </div>
                <button onclick="addModalAct()" class="text-sm font-semibold text-comuBlue hover:underline p-2 bg-white rounded border border-blue-200">${t('addAct')}</button>
                <h4 class="font-bold text-gray-800 mt-6 mb-3">${t('finalWeight')}</h4>
                <div class="flex items-center">
                    <input type="number" id="modalFinalInput" value="${tempModalFinalWeight}" oninput="updateModalFinal()" class="w-24 p-3 bg-white border border-gray-300 rounded-lg text-center text-lg shadow-inner">
                    <span id="modalFinalWarn" class="text-amber-600 text-sm font-semibold ml-4 ${tempModalFinalWeight === 60 ? 'hidden' : ''}">${t('finalWarn')}</span>
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
    tempModalActivities.push({ id: nextId, name: lang === 'en' ? 'Assignment' : 'Ödev', weight: 10, score: '' });
    renderSettingsModalContent();
}

function updateModalAct(id, field, value) {
    const act = tempModalActivities.find(a => a.id === id);
    if (act) {
        if (field === 'weight') {
            act[field] = parseFloat(value) || 0;
        } else {
            act[field] = value;
        }
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
    
    if (w !== 60) {
        warn.classList.remove('hidden');
    } else {
        warn.classList.add('hidden');
    }
}

function saveSettingsModal() {
    if (tempModalMode === 'exam') {
        let sum = tempModalFinalWeight;
        tempModalActivities.forEach(a => sum += a.weight);
        
        if (sum !== 100) {
            let err = document.getElementById('sumErr');
            if (!err) {
                err = document.createElement('div');
                err.id = 'sumErr';
                err.className = 'mt-4 p-3 bg-red-50 text-red-600 rounded-lg font-bold text-sm';
                document.getElementById('modalBody').appendChild(err);
            }
            err.innerHTML = t('errSumMsg');
            return;
        }
    }
    
    let course = modalEditSem === -1 ? currentCourses[modalEditIndex] : state.history[modalEditSem].courses[modalEditIndex];
    course.mode = tempModalMode;
    
    if (tempModalMode === 'exam') {
        course.activities = JSON.parse(JSON.stringify(tempModalActivities));
        course.finalWeight = tempModalFinalWeight;
        if (course.grade && course.grade.length > 2) {
            course.grade = '';
        }
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
            c.activities.forEach(a => {
                if (a.score !== '' && (a.score < 0 || a.score > 100)) {
                    allExamsValid = false;
                }
            });
            
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
        showModal(lang === 'tr' ? "Bütünleme" : "Make-up Exam", t('butunlemeFillMsg'), false, null, t('btnClose'));
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
        localStorage.setItem('gano_state', JSON.stringify(state));
    } catch (e) {
    }

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
        <div class="mb-6 bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 class="font-bold text-comuBlue border-b border-blue-200 pb-3 mb-3 text-lg">${t('summarySem')}</h3>
            <div class="flex justify-between mb-2 font-medium"><span>${t('summaryTotal')} ${cType}:</span> <strong>${semCredits.toFixed(1)}</strong></div>
            <div class="flex justify-between font-medium items-center"><span>${t('summaryYano')}</span> <strong class="text-2xl text-blue-600">${yanoRounded}</strong></div>
        </div>
        <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
            <h3 class="font-bold text-emerald-800 border-b border-emerald-200 pb-3 mb-3 text-lg">${t('summaryGen')}</h3>
            <div class="flex justify-between mb-2 font-medium"><span>${t('summaryGenTotal')} ${cType}:</span> <strong>${cumCredits.toFixed(1)}</strong></div>
            <div class="flex justify-between font-medium items-center"><span>${t('summaryGano')}</span> <strong class="text-3xl text-green-600">${ganoDisp}</strong></div>
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
        resultHTML += `<div class="mt-8 text-center text-white bg-green-600 p-4 rounded-xl font-bold shadow-md text-xl">${t('successMsg')}</div>`;
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
                localStorage.setItem('gano_state', JSON.stringify(state));
            } catch (e) {
            }
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
                nameVal = state.creditType === 'akts' 
                    ? (lang === 'tr' ? `${c.credit} AKTS` : `${c.credit} ECTS`) 
                    : (lang === 'tr' ? `${c.credit} Kredi` : `${c.credit} Credit`);
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
        localStorage.setItem('gano_state', JSON.stringify(state));
    } catch (e) {
    }
}

function renderTranscript() {
    const container = document.getElementById('transcriptContainer');
    container.innerHTML = '';
    
    const cType = state.creditType === 'akts' ? t('aktsTitle') : t('yerelTitle');
    let hasData = false;
    
    for (let s = state.startSemester; s <= state.targetSemester; s++) {
        if (!state.history[s] || state.history[s].courses.length === 0) continue;
        
        hasData = true;
        let html = `
            <div class="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 class="font-bold text-lg text-comuBlue mb-4 border-b border-gray-200 pb-2">${t('semPrefix')}${s}${t('semSuffix')}</h3>
                <div class="transcript-courses-${s} space-y-4"></div>
            </div>
        `;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        container.appendChild(tempDiv.firstChild);
        
        const courseCont = container.querySelector(`.transcript-courses-${s}`);
        
        state.history[s].courses.forEach((c, idx) => {
            const row = document.createElement('div');
            row.className = `transcript-row-${s} bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center`;
            
            let rowHtml = `
                <div class="hidden md:flex flex-shrink-0 w-8 justify-center font-bold text-gray-400">${idx + 1}</div>
                <div class="w-full md:w-1/3 flex-shrink-0">
                    <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${t('colName')}</label>
                    <input type="text" class="inp-name w-full p-4 md:p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-lg md:text-base focus:ring-2 focus:ring-comuBlue shadow-inner" value="${c.name || ''}">
                </div>
                <div class="w-full md:w-20 flex-shrink-0">
                    <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${cType}</label>
                    <input type="number" step="0.5" min="0" class="inp-credit w-full p-4 md:p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-lg md:text-base md:text-center focus:ring-2 focus:ring-comuBlue shadow-inner" value="${c.credit || ''}">
                </div>
                <div class="w-full flex-grow flex flex-wrap gap-2 items-center">
            `;
            
            if (c.mode === 'letter') {
                let gOpts = `<option value="" disabled selected>${t('selectMsg')}</option>`;
                for (const g in GRADES) {
                    gOpts += `<option value="${g}" ${c.grade === g ? 'selected' : ''}>${g}</option>`;
                }
                
                rowHtml += `
                    <div class="flex-grow md:max-w-[150px]">
                        <label class="md:hidden block text-xs font-bold text-gray-500 mb-1">${t('colGrade')}</label>
                        <select class="inp-grade w-full p-4 md:p-2.5 bg-gray-50 border border-gray-300 rounded-lg text-lg md:text-base focus:ring-2 focus:ring-comuBlue shadow-inner">${gOpts}</select>
                    </div>
                `;
            } else {
                c.activities.forEach(a => {
                    rowHtml += `
                        <div class="w-20 flex-shrink-0">
                            <label class="text-[10px] uppercase truncate block text-gray-500 font-bold mb-1">${a.name} %${a.weight}</label>
                            <input type="number" min="0" max="100" class="inp-act-${a.id} w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-lg md:text-base text-center shadow-inner" value="${a.score !== '' ? a.score : ''}">
                        </div>
                    `;
                });
                
                rowHtml += `
                    <div class="w-20 flex-shrink-0">
                        <label class="text-[10px] uppercase truncate block text-gray-500 font-bold mb-1">FİNAL %${c.finalWeight}</label>
                        <input type="number" min="0" max="100" class="inp-final w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-lg md:text-base text-center shadow-inner" value="${c.finalScore !== '' ? c.finalScore : ''}">
                    </div>
                `;
                
                if (c.showBut) {
                    rowHtml += `
                        <div class="w-20 flex-shrink-0">
                            <label class="text-[10px] uppercase truncate block text-amber-600 font-bold mb-1">BÜTÜNLEME</label>
                            <input type="number" min="0" max="100" class="inp-but w-full p-3 bg-amber-50 border border-amber-300 rounded-lg text-lg md:text-base text-center shadow-inner" value="${c.butScore !== '' ? c.butScore : ''}">
                        </div>
                    `;
                }
                
                let isFailed = c.grade === 'FF' || c.grade === 'FD' || c.grade === 'DD' || c.grade === 'DC';
                rowHtml += `<div class="ml-2 w-12 text-center font-bold text-2xl md:text-lg ${isFailed ? 'text-red-600' : 'text-green-600'} mt-4 md:mt-0">${c.grade || '-'}</div>`;
            }
            
            rowHtml += `
                </div>
                <div class="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                    <button onclick="openSettingsModal(${idx}, ${s})" class="w-full md:w-auto text-base md:text-sm font-semibold text-comuBlue bg-blue-50 px-4 py-3 md:px-3 md:py-2 rounded-lg border border-blue-200">⚙️ ${t('btnSetting')}</button>
                </div>
            `;
            
            row.innerHTML = rowHtml;
            courseCont.appendChild(row);
        });
    }
    
    if (!hasData) {
        container.innerHTML = `<div class="text-center text-gray-500 py-8">Kayıtlı veri bulunamadı.</div>`;
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
            if (c.mode === 'exam' && c.finalScore === '') hasError = true;
        });
    }
    
    if (hasError) {
        showModal(t('errGano'), t('errRowCreditMsg'), true);
        return;
    }
    
    try {
        localStorage.setItem('gano_state', JSON.stringify(state));
    } catch (e) {
    }
    
    renderTranscript();
    
    if (needsBut) {
        showModal(lang === 'tr' ? "Bütünleme" : "Make-up Exam", t('butunlemeFillMsg'), false, null, t('btnClose'));
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
    window.print();
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