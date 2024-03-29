<?php

namespace App\Exports;

use App\Models\VmtPMS_KPIFormReviewsModel;
use App\Models\User;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithCustomStartCell;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Sheet;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Style\Color;
use PhpOffice\PhpSpreadsheet\Style\Border;


class VmtPmsMasterReviewsReport implements ShouldAutoSize, FromArray, WithCustomStartCell, WithHeadings, WithStyles,WithDrawings
{
    /**
     * @return \Illuminate\Support\Collection
     */

    protected $array_headings1;
    protected $array_value;
    protected $last_header_column;
    protected $array_headings2;
    protected $public_client_logo_path;
    protected $client_name;


    function __construct($array_headings1, $array_value, $array_headings2,$public_client_logo_path,$client_name)
    {
        $this->array_headings1 = $array_headings1;
        $this->array_value = $array_value;
        $this->last_header_column = num2alpha(count($array_headings1) - 1);
        $this->array_headings2 = $array_headings2;
        $this->public_client_logo_path = $public_client_logo_path;
        $this->client_name = $client_name;
    }


    //For Headings
    public function headings(): array
    {
        return [
            //$this->array_headings2,
            $this->array_headings1
        ];
    }


    public function startCell(): string
    {
        return 'A8';
    }

    public function array(): array
    {
        return $this->array_value;
    }

    public function styles(Worksheet $sheet)
    {
        // first header
        $sheet->getStyle('A7:' . $this->last_header_column . '7')->getFont()->setBold(true);
        $sheet->getStyle('A7:' . $this->last_header_column . '7')->getFill()
            ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
            ->getStartColor()->setRGB('808080');
        $sheet->getStyle('A7:' . $this->last_header_column . '7')
            ->getFont()->setBold(true)->getColor()->setRGB('ffffff');

            // second header
        $sheet->getStyle('A8:' . $this->last_header_column . '8')->getFont()->setBold(true);
        $sheet->getStyle('A8:' . $this->last_header_column . '8')->getFill()
            ->setFillType(\PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID)
            ->getStartColor()->setRGB('002164');
        $sheet->getStyle('A8:' . $this->last_header_column . '8')
            ->getFont()->setBold(true)->getColor()->setRGB('ffffff');

            //
            $sheet->mergeCells('A'.count($this->array_value) + 11 .':G'.count($this->array_value) + 11)->setCellValue('A'.count($this->array_value) + 11, " This report is generated by ABShrms Payroll Software : ".Carbon::now()->format('d-M-Y'));
            $sheet->getStyle('A'.count($this->array_value) + 11 .':G'.count($this->array_value) + 11)->getFont()->setBold(true);

            $sheet->setShowGridlines(false);

            $sheet->mergeCells('C1:E1')->setCellValue('C1', "Legal Entity : " . $this->client_name);
            $sheet->getStyle('C1:E1')->getFont()->setBold(true);

            //For Second Row
            $sheet->mergeCells('C2:E2')->setCellValue('C2', "Report Type : " .' Pms Master Report');
            $sheet->getStyle('C2:E2')->getFont()->setBold(true);

            //For Third Row
            // $sheet->mergeCells('C3:E3')->setCellValue('C3', "Period : ".$this->date);
            // $sheet->getStyle('C3:E3')->getFont()->setBold(true);


        $i = 0;
        foreach ($this->array_headings2 as $single_date) {
            if ($i == 0) {
                $sheet->setCellValue('A7', $single_date);
                $i++;
            } else {
                $sheet->mergeCells(num2alpha($i) . '7:' . num2alpha($i + 1) . '7')->setCellValue(num2alpha($i) . '7', $single_date);
                $i = $i + 2;
            }
        }

    }

    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setPath($this->public_client_logo_path);
        $drawing->setHeight(1200);
        $drawing->setWidth(224);
        $drawing->setCoordinates('A2');
        return $drawing;
    }

}
