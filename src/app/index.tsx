import { useRef, useState } from 'react';
import { Text, View, type DimensionValue } from 'react-native';
import {
  Action,
  Card,
  LabScreen,
  Label,
  Metric,
  Notice,
  ui,
  useLabTheme,
} from '@/components/lab-ui';
import { questionBank } from '@/data/questions';
import { sampleQuestions } from '@/utils/quiz';
export default function QuizScreen() {
  const t = useLabTheme();
  const [questions, setQuestions] = useState<typeof questionBank>([]),
    [index, setIndex] = useState(0),
    [score, setScore] = useState(0),
    [selected, setSelected] = useState<boolean | null>(null),
    [finished, setFinished] = useState(false);
  const answered = useRef(false);
  const start = () => {
    setQuestions(sampleQuestions(questionBank, 8));
    setIndex(0);
    setScore(0);
    setSelected(null);
    answered.current = false;
    setFinished(false);
  };
  const answer = (value: boolean) => {
    if (answered.current || finished) return;
    answered.current = true;
    setSelected(value);
    if (value === questions[index].answer) setScore((old) => old + 1);
  };
  const next = () => {
    if (!answered.current) return;
    if (index + 1 === questions.length) {
      setFinished(true);
    } else {
      setIndex((old) => old + 1);
      setSelected(null);
      answered.current = false;
    }
  };
  if (!questions.length)
    return (
      <LabScreen>
        <Card style={ui.center}>
          <Text style={{ fontSize: 58 }}>✦</Text>
          <Text style={[ui.heading, { color: t.text, textAlign: 'center' }]}>
            Thêm một chút kiến thức mỗi ngày.
          </Text>
          <Notice>
            8 câu hỏi ngẫu nhiên. Không giới hạn thời gian. Luôn có một điều mới
            để khám phá.
          </Notice>
          <View style={ui.row}>
            <Metric label="Câu mỗi lượt" value={8} />
            <Metric label="Câu trong ngân hàng" value={questionBank.length} />
          </View>
        </Card>
        <Action label="Bắt đầu thử thách →" onPress={start} />
      </LabScreen>
    );
  if (finished)
    return (
      <LabScreen
        title="Làm tốt lắm!"
        subtitle="Một lượt chơi, thêm nhiều điều thú vị."
      >
        <Card style={ui.center}>
          <Label>KẾT QUẢ CỦA BẠN</Label>
          <Text style={{ fontSize: 72, fontWeight: '800', color: t.accent }}>
            {score}
            <Text style={{ fontSize: 26, color: t.muted }}>
              {' '}
              / {questions.length}
            </Text>
          </Text>
          <Notice>
            {score === questions.length
              ? 'Điểm tuyệt đối! Bạn thật xuất sắc.'
              : score >= 4
                ? 'Một kết quả đáng tự hào. Tiếp tục khám phá nhé.'
                : 'Mỗi lần thử là một lần tiến bộ. Cùng thử lại nhé.'}
          </Notice>
        </Card>
        <Action label="Chơi lượt mới ↻" onPress={start} />
      </LabScreen>
    );
  const current = questions[index],
    correct = selected === current.answer;
  return (
    <LabScreen>
      <View style={[ui.row, { justifyContent: 'space-between' }]}>
        <Label>
          CÂU {index + 1} / {questions.length}
        </Label>
        <Text style={{ color: t.accent, fontWeight: '700' }}>
          {score} điểm ✦
        </Text>
      </View>
      <View
        accessibilityRole="progressbar"
        accessibilityValue={{
          min: 0,
          max: questions.length,
          now: index + (selected !== null ? 1 : 0),
        }}
        style={{
          height: 7,
          backgroundColor: t.soft,
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            height: 7,
            width: (((index + (selected !== null ? 1 : 0)) / questions.length) *
              100 +
              '%') as DimensionValue,
            backgroundColor: t.solid,
          }}
        />
      </View>
      <Card>
        <Label>ĐÚNG HAY SAI?</Label>
        <Text
          accessibilityRole="header"
          style={[ui.heading, { color: t.text, marginVertical: 16 }]}
        >
          {current.question}
        </Text>
        <Notice>Chọn đáp án theo suy nghĩ của bạn.</Notice>
      </Card>
      <View style={ui.row}>
        <View style={{ flex: 1, minWidth: 100 }}>
          <Action
            label="✓ Đúng"
            onPress={() => answer(true)}
            disabled={selected !== null}
          />
        </View>
        <View style={{ flex: 1, minWidth: 100 }}>
          <Action
            secondary
            label="✕ Sai"
            onPress={() => answer(false)}
            disabled={selected !== null}
          />
        </View>
      </View>
      {selected !== null && (
        <Card>
          <Text
            accessibilityLiveRegion="polite"
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: correct ? t.success : t.danger,
            }}
          >
            {correct ? 'Chính xác!' : 'Chưa đúng rồi.'}
          </Text>
          <Notice>{current.explanation}</Notice>
          <Action
            label={
              index + 1 === questions.length
                ? 'Xem kết quả →'
                : 'Câu tiếp theo →'
            }
            onPress={next}
          />
        </Card>
      )}
    </LabScreen>
  );
}
