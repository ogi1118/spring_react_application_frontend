import { useState } from "react";

// エラー情報を保持する型。キーがフィールド名、値がエラーメッセージ。
export type ErrorsMap = Record<string, string>;

/**
 * useFormValidation フック
 * - 簡易的な「必須チェック」を共通化するためのフックです。
 * - 引数にフィールド名→表示ラベルのマップを渡すと、エラーメッセージにラベル名を使います。
 *
 * 使い方（例）:
 * const { errors, validate } = useFormValidation({ name: 'Name', email: 'Email' });
 * if (!validate({ name, email })) return; // バリデーション失敗
 */
export const useFormValidation = (fieldLabels: Record<string, string> = {}) => {
  // fieldLabels が渡されているキーに対応する、初期の空文字列エラーオブジェクトを作る
  // reduce を使って { field1: '', field2: '' } の形を作っています
  const initialErrors: ErrorsMap = Object.keys(fieldLabels).reduce(
    (acc, key) => ({ ...acc, [key]: "" }),
    {}
  );

  // React の state にエラーを保持します
  const [errors, setErrors] = useState<ErrorsMap>(initialErrors);

  /**
   * validate
   * - values: フィールド名→値 のオブジェクトを渡すと、必須チェックをしてエラーを state にセットします
   * - true が返ればすべて入力あり、false は未入力があることを表します
   */
  const validate = (values: Record<string, string>) => {
    let valid = true;
    // 次のエラー状態を作るためにコピーを作成
    const nextErrors: ErrorsMap = { ...errors };

    // validation の対象キーを決定する
    // - fieldLabels があればそちらのキーを優先
    // - そうでなければ渡された values のキーを検証対象とする
    const keys =
      Object.keys(fieldLabels).length > 0
        ? Object.keys(fieldLabels)
        : Object.keys(values);

    // 各キーについて必須チェック（空文字かどうか）を行う
    keys.forEach((k) => {
      const val = (values[k] ?? "").trim();
      if (!val) {
        const label = fieldLabels[k] ?? k
        nextErrors[k] = `${label} is required`;
        valid = false;
      } else {
        nextErrors[k] = ""; // エラーがなければ空文字
      }
    });

    // state を更新して、フォームにエラーを表示できるようにする
    setErrors(nextErrors);
    return valid;
  };

  // フックが提供する値
  return { errors, setErrors, validate };
};

export default useFormValidation;
