"use client";

import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import html2canvas from "html2canvas";


const questions = [
  {
    id: "q1",
    text: "ドラマに1番求める「刺激」は？",
    choices: [
      { value: "A", label: "緻密な計画が実を結ぶ達成感" },
      { value: "B", label: "極限状態での生存本能" },
      { value: "C", label: "幻想的な魂の触れ合い" },
      { value: "D", label: "時を超えて響き合う運命の絆" },
      { value: "E", label: "ステージへかける情熱" },
      { value: "F", label: "時空を超えた世界の謎" }

    ]
  },
  {
    id: "q2",
    text: "もし人生をやり直せるなら？",
    choices: [
      { value: "A", label: "過去の傷と正面から向き合う" },
      { value: "B", label: "仲間と日常を守り抜く" },
      { value: "C", label: "限りある時間を誰と分かち合うか" },
      { value: "D", label: "長い時を超え大切な存在と巡り合う" },
      { value: "E", label: "何者かへと成長する道程" },
      { value: "F", label: "運命を書き換える旅に出る" }
    ]
  },
  {
    id: "q3",
    text: "惹かれる「出会い」は？",
    choices: [
      { value: "A", label: "過去の記憶が交差する静かな対峙" },
      { value: "B", label: "崩壊の中で支え合う仲間" },
      { value: "C", label: "境界線で交わす秘密の約束" },
      { value: "D", label: "不思議な縁で引き合う絆" },
      { value: "E", label: "共に汗を流す熱い同志" },
      { value: "F", label: "運世界を救うための運命の共闘" }
    ]
  },
  {
    id: "q4",
    text: "あなたが最も恐れることは？",
    choices: [
      { value: "A", label: "大切な記憶や平穏を奪われたまま終わること" },
      { value: "B", label: "日常が突然消えること" },
      { value: "C", label: "自分の存在が誰の記憶からも消えること" },
      { value: "D", label: "心を通わせた相手との永遠の別れ" },
      { value: "E", label: "夢が色褪せていくこと" },
      { value: "F", label: "滅亡をただ傍観すること" }
    ]
  },
  {
    id: "q5",
    text: "どんな「景色」に心打たれる？",
    choices: [
      { value: "A", label: "鋭く澄んだ静かな空気" },
      { value: "B", label: "荒廃の中に光る希望の灯" },
      { value: "C", label: "月明かりに浮かぶ幻想的な光" },
      { value: "D", label: "季節の移ろいを感じる穏やかな風景" },
      { value: "E", label: "夢を照らすスポットライト" },
      { value: "F", label: "未来と日常が交差する光景" }
    ]
  },
  {
    id: "q6",
    text: "困難に直面した時の行動は？",
    choices: [
      { value: "A", label: "長い時間をかけ自ら答えを出す" },
      { value: "B", label: "仲間と共に突破口を探す" },
      { value: "C", label: "趣秘密を抱え静かに耐える" },
      { value: "D", label: "運命を信じ相手のために尽くす" },
      { value: "E", label: "仲間と励まし何度でも挑戦" },
      { value: "F", label: "論理的に道を切り開く" }
    ]
  },
  {
    id: "q7",
    text: "今の心に響く「テーマ」は？",
    choices: [
      { value: "A", label: "自分だけの決着をつける" },
      { value: "B", label: "今この瞬間を生き抜く" },
      { value: "C", label: "終わりがあるからこその美しさ" },
      { value: "D", label: "何度でも巡り合う深い絆" },
      { value: "E", label: "止められない成長の衝動" },
      { value: "F", label: "ループする絶望を断つ意志" }
    ]
  },
  {
    id: "q8",
    text: "求める「感情の揺さぶり」は？",
    choices: [
      { value: "A", label: "隠された真実が明かされる瞬間" },
      { value: "B", label: "息を呑む緊張感の連続" },
      { value: "C", label: "懐かしく寂しい余韻" },
      { value: "D", label: "運命的な絆の深さ" },
      { value: "E", label: "努力と情熱の感動" },
      { value: "F", label: "パズルのような壮大な興奮" }
    ]
  },
  {
    id: "q9",
    text: "気どんな「時間」を過ごしたい？",
    choices: [
      { value: "A", label: "過去の清算に向けた静かな思索の時間" },
      { value: "B", label: "仲間と共に生き抜く必死な時間" },
      { value: "C", label: "記憶に寄り添う不思議な時間" },
      { value: "D", label: "運命の相手と歩みを揃える時間" },
      { value: "E", label: "夢を追い続ける情熱の時間" },
      { value: "F", label: "真実を求め時空を奔走する時間" }
    ]
  },
  {
    id: "q10",
    text: "物語の「最後」に見たいのは？",
    choices: [
      { value: "A", label: "自分を取り戻し本当の自由を得た姿" },
      { value: "B", label: "日常の空を見上げる笑顔" },
      { value: "C", label: "誰にも知られず穏やかに去る姿" },
      { value: "D", label: "巡り合わせの果てにたどり着く奇跡" },
      { value: "E", label: "夢を叶えた自分自身の姿" },
      { value: "F", label: "世界を変え新しい明日を掴んだ証" }
    ]
  },
];

const drama = {
  "ザ・グローリー": {
    name: "ザ・グローリー",
    image: "/dramas/title_glory.JPG",
    catch: "狂気と復讐のチェスゲーム",
    message: "衝撃の復讐劇",
    color: "from-pink-500 to-rose-400"
  },
  "今、私たちの学校は…": {
    name: "今、私たちの学校は…",
    image: "/dramas/title_school.JPG",
    catch: "逃げ場なき、極限の学園戦",
    message: "生存ホラー",
    color: "from-blue-500 to-cyan-400"
  },
  "ホテルデルーナ": {
    name: "ホテルデルーナ",
    image: "/dramas/title_hotel.JPG",
    catch: "満月が導く、魂の最期の物語",
    message: "幻想ファンタジー",
    color: "from-purple-500 to-indigo-400"
  },
  "トッケビ": {
    name: "トッケビ",
    image: "/dramas/title_goblin.JPG",
    catch: "時を超えて、愛を探す旅",
    message: "感動のラブストーリー",
    color: "from-purple-500 to-indigo-400"
  },
  "ドリームハイ": {
    name: "ドリームハイ",
    image: "/dramas/title_dream.JPG",
    catch: "夢を掴むまで、終わらない舞台",
    message: "青春スター物語",
    color: "from-purple-500 to-indigo-400"
  },
  "シーシュポス": {
    name: "シーシュポス",
    image: "/dramas/title_sisyphus.JPG",
    catch: "時空を超えた、終わりなき選択",
    message: "SFタイムトラベル",
    color: "from-purple-500 to-indigo-400"
  }
};
type DramaKey = keyof typeof drama;

export default function Home() {
  const [flash, setFlash] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<DramaKey | "">("");
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStartOpen, setIsStartOpen] = useState(true);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const resetAll = () => {
    setResult("");
    setAnswers({});
    setCurrentIndex(0);
    setIsQuestionOpen(false);
    setIsStartOpen(true);
  };

  const selectAnswer = (qId: string, value: string) => {
    setAnswers({
      ...answers,
      [qId]: value
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuestionOpen(false); // 全部終わったら閉じる
    }
  };

  const diagnose = async () => {
    console.log("送信前のanswersの中身:", answers);
    setLoading(true);
    setFlash(true); // ← 白フラッシュON

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/match`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });

    console.log("status:", res.status);

    const data = await res.json();
    console.log("data:", data);

    setTimeout(() => {
      setResult(data.result);
      setLoading(false);
      setFlash(false); // ← フラッシュOFF
    }, 600);
  };
  const selectedMember = result ? drama[result] : null;

  const downloadResultImage = async () => {
    if (!resultRef.current) return;

    const canvas = await html2canvas(resultRef.current, {
      useCORS: true,
      allowTaint: false,
      scale: 2,
      backgroundColor: null,
      logging: true,
      scrollX: 0,
      scrollY: 0,
    });

    const link = document.createElement("a");
    link.download = "inoruchi-match.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (

    <div className="min-h-screen flex items-center justify-center
  bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={() => setResult("")}
      />
      <div className="relative z-50 w-[90%] max-w-md
      rounded-3xl overflow-hidden shadow-2xl
      bg-white animate-fade-in">

        <div className="p-10 text-center">

          <p className="text-sm text-neutral-500 tracking-wide text-3xs font-serif font-semibold" >
            今日の気分に、ぴったりな作品は...
          </p>

          {/* 10問すべてに答えたときだけMATCHボタンを表示する */}
          {Object.keys(answers).length === questions.length ? (
            <button
              onClick={diagnose}
              disabled={loading}
              className="w-full py-5 rounded-full
              !bg-[#F8F7F4] text-[#535157]
              hover:opacity-95 shadow-lg shadow-black/10
              tracking-[0.2em] text-base font-semibold font-serif
              transition-all duration-300"
            >
              {loading ? "ANALYZING…" : "MATCH"}
            </button>
          ) : (
            <p className="text-sm text-[#535157]/80 font-serif">
              すべての質問に答えるとMATCHボタンが出現します（現在 {Object.keys(answers).length}/10問）
            </p>
          )}

        </div>
        {/* White flash overlay */}
        <div
          className={`
          fixed inset-0 z-50 pointer-events-none
          bg-white transition-opacity duration-700
          ${flash ? "opacity-100" : "opacity-0"}
        `}
        />

        {isQuestionOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#6D6A78]">
            {/* カードの背景： */}
            <div className="relative bg-[#ECE7D6] w-full max-w-md rounded-[32px] p-12 shadow-2xl text-center space-y-8 border border-[#C5A8A3]">

              {/* 質問番号（QUESTION 1 など） */}
              <p className="text-sm tracking-[0.2em] text-[#c41a12] font-serif font-medium">
                QUESTION {currentIndex + 1}
              </p>

              {/* 質問文*/}
              <h2 className="text-lg text-center leading-relaxed text-[#c41a12] font-serif font-semibold">
                {questions[currentIndex].text}
              </h2>

              {/* 選択肢ボタン */}
              <div className="space-y-3">
                {questions[currentIndex].choices.map((c) => (
                  <button
                    key={c.value}
                    onClick={() =>
                      selectAnswer(questions[currentIndex].id, c.value)
                    }

                    className="w-full rounded-full
                      !bg-[#F8F7F4] text-[#535157]
                      hover:!bg-[#EFECE6] transition
                      px-6 py-4 text-sm font-serif tracking-wide
                      shadow-md shadow-black/10"
                  >
                    {c.label}
                  </button>
                ))}
              </div>

            </div>
          </div>
        )}

        {isStartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#6D6A78]">
            {/* モーダルカード*/}
            <div className="relative bg-[#ECE7D6] w-full max-w-md rounded-[32px] p-12 shadow-2xl text-center space-y-10 border border-[#DFDACB]">

              {/* メインタイトル*/}
              <h2 className="text-3xl font-semibold tracking-wider text-[#c41a12] font-serif leading-tight">
                韓国ドラマおすすめMATCH
              </h2>

              <div className="space-y-3">
                {/* サブタイトル */}
                <p className="text-base font-medium text-[#c41a12] tracking-wide font-serif">
                  今見たい、お気に入りのドラマ。
                </p>
                {/* 韓国語 */}
                <p className="text-xs font-medium text-[#c41a12]/90 tracking-widest font-serif">
                  (오늘의 K-Drama！)
                </p>
              </div>

              <button
                onClick={() => {
                  setIsStartOpen(false);
                  setIsQuestionOpen(true);
                }}

                style={{ backgroundColor: '#F8F7F4' }}
                className="w-full py-5 rounded-full
                    text-[#535157]
                    hover:opacity-95
                    shadow-lg shadow-black/10
                    tracking-[0.2em] text-base font-semibold font-serif
                    transition-all duration-300"
              >
                MATCHING START
              </button>

            </div>
          </div>
        )}
        {/* 結果モーダル */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* 背景暗転 */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-md z-0 pointer-events-none"
              onClick={resetAll}
              style={{ pointerEvents: "auto" }}
            />

            <div className="relative z-10 w-[90%] max-w-md rounded-3xl overflow-hidden shadow-2xl">

              {/* ===== 本体 ===== */}
              <div
                ref={resultRef}
                className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl"
              >

                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover brightness-110"
                  priority
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 w-full p-8 text-white text-center space-y-4">
                  <p className="text-xs tracking-[0.4em] opacity-80 font-serif">
                    MATCH RESULT
                  </p>

                  <h2 className="text-3xl font-semibold tracking-wide font-serif">
                    {selectedMember.name}
                  </h2>

                  <p className="text-sm opacity-90 font-serif">
                    {selectedMember.message}
                  </p>

                  {/* Xでシェアボタン*/}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('おすすめの韓国ドラマを診断しました！')}und&url=${encodeURIComponent('https://inoruchi-matching.vercel.app/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#535157', color: '#F8F7F4' }}
                    className="block w-full py-4 rounded-full text-center mt-4 font-serif font-semibold shadow-lg shadow-black/10 tracking-[0.2em] hover:opacity-95 transition-all duration-300"
                  >
                    Xでシェア
                  </a>

                  {/* MATCHING STARTボタン：クリックすると最初のタイトル画面に戻る処理 (resetAll) を実行 */}
                  <button
                    onClick={resetAll}
                    style={{ backgroundColor: '#F8F7F4' }}
                    className="w-full py-5 rounded-full
                    text-[#535157]
                    hover:opacity-95
                    shadow-lg shadow-black/10
                    tracking-[0.2em] text-base font-semibold font-serif
                    transition-all duration-300"
                  >
                    MATCHING START
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );

}
