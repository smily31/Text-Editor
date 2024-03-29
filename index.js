/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE: Add a .bold, .italic classes to "Formatted Text" when the appropiate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropiate button is clicked
 */

/**
 * After learning some ES6 features ,next task is
 * DONE: Convert this code to possible ES6 
 * Hint: convert functions to arrow function 
 *       replace for loop with map or for of or forEach and so on...
 */

/**
 * Update the output text as user types in the textarea
 * Hint->use onkeydown function inside html textarea tag->where we call this updatefunction
 */
/**
 * now using onkeydown() we dont get input instant so we use then onkeyup() as its only fuction which stores value immediate 
 * but when we copy text from elsewhere and tried to paste it then the "Formatted Text" region is empty
 * so the best way is to use oninput() as any change in input the function is called and we our desired result
 */
updateText = () =>
{
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
}

/**
 * use onclick function in html and access it with this keyword then toggle the class
 */
makeBold = (elem) =>
{
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
}

makeItalic = (elem) =>
{
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
}

/**
 * use .add, .remove, .contains for underline class
 */
makeUnderline = (elem) =>
{
    elem.classList.toggle('active');
    if(document.getElementById("text-output").classList.contains('underline'))
    {
        document.getElementById("text-output").classList.remove('underline');
    }
    else
    {
        document.getElementById("text-output").classList.add('underline');
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align buttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) =>
{
    document.getElementById('text-output').style.textAlign = alignType;
    let buttonList = document.getElementsByClassName('align');
    // for(let i=0;i<buttonList.length;i++)
    // {
    //     buttonList[i].classList.remove('active');
    // }
    // here we cant use .map as buttonlist is not an array it is a HTMLcollection
    for(let button of buttonList)
    {
        button.classList.remove('active');
    }
    elem.classList.add('active');
}