$mappingFilePath = "mapping.json"

# ��ʼ�����е�ӳ������
$existingMapping = @{}

# ��� mapping.json �ļ��Ƿ���ڣ���������������
if (Test-Path $mappingFilePath) {
    $existingJson = Get-Content -Path $mappingFilePath -Raw
    $existingMapping = $existingJson | ConvertFrom-Json 
}

# ��ȡ��ǰĿ¼�µ��ļ��к�.md�ļ�
$items = Get-ChildItem -Path (Get-Location) -Recurse | Where-Object { $_.PSIsContainer -or $_.Extension -eq '.md' }

foreach ($item in $items) {
    # ʹ���ļ����ļ��е�������Ϊ��
    $name = $item.Name
    # ����������ڣ�����Ӽ�
    if ($null -eq $existingMapping.$name) {
        $existingMapping | Add-Member -Type NoteProperty -Name $name -Value ""
    }
}

# �����º��ӳ��ת��Ϊ JSON
$updatedJson = $existingMapping | ConvertTo-Json -Depth 100

# ���浽 mapping.json �ļ�
$updatedJson | Out-File -FilePath $mappingFilePath -Encoding utf8

Write-Host "�ļ��к�.md��ʽ���ļ������Ѹ����� mapping.json��"