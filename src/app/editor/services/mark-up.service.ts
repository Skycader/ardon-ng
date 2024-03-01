import { Injectable } from '@angular/core';
import { SnackbarService } from '../../ardon-common/services/snackbar.service';
import { EditorService } from './editor.service';

@Injectable({
  providedIn: 'root',
})
export class MarkUpService {
  public currentTextarea: any;
  constructor(
    private snakcBar: SnackbarService,
    private editor: EditorService
  ) {}

  public getInputSelection(el: any) {
    var start = 0,
      end = 0,
      normalizedValue,
      range,
      textInputRange,
      len,
      endRange;

    if (
      typeof el.selectionStart == 'number' &&
      typeof el.selectionEnd == 'number'
    ) {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      range = (document as any).selection.createRange();

      if (range && range.parentElement() == el) {
        len = el.value.length;
        normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end,
    };
  }

  public replaceSelectedText(el: any, text: any) {
    var sel = this.getInputSelection(el),
      val = el.value;
    el.value = val.slice(0, sel.start) + text + val.slice(sel.end);
  }

  public setCurrentTextarea(textarea: any) {
    this.currentTextarea = textarea;
  }

  public render() {
    const el = window.getSelection()?.anchorNode?.childNodes[0];

    if (!el) {
      this.snakcBar.inform('Для начала сфокусируйте текстовое поле');
      return;
    }

    if (window.getSelection()?.toString().length === 0) {
      this.snakcBar.inform('Для начала выделите текст');
      return;
    }
    this.replaceSelectedText(el, `**${window.getSelection()?.toString()}**`);
    this.editor.updateArticle();
  }
}
