/* add a predefined list of unsorted nodes */
unsortedlist=[6,3,8,4,1,9,5];

/* the sort_part function , sorts part of the list using a while loop*/
function sort_part(the_list, low_idx,pivot_idx){
    /* add your code here */

    pivot_val = the_list[low_idx];

    while(pivot_idx != low_idx){
        low_val = the_list[low_idx];

        console.log(the_list, low_val, pivot_val);
        if(low_val <= pivot_val){
            low_idx +=1;
        } else {
            the_list[low_idx] = the_list[pivot_idx - 1];
            the_list[pivot_idx] = low_val;
            the_list[pivot_idx -1] = pivot_val;
            pivot_idx -=1;
        }
    }

    return pivot_idx;
}

/* the quicksort function- the recursive function */
function quicksort(the_list, low_idx, high_idx){
    /* add your code here */
    if(low_idx > high_idx){
        return;
    }
    pivot_idx = sort_part(the_list, low_idx, high_idx);
    quicksort(the_list, low_idx, pivot_idx - 1);
    quicksort(the_list, pivot_idx + 1, high_idx);
    return the_list;
}